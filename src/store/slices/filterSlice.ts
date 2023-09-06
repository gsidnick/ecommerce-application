import {
  createSlice,
  PayloadAction,
  createAction,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { ProductProjection } from '@commercetools/platform-sdk';
import { RootState } from '@/store/store';
import ProductController from '@/api/controllers/ProductController';
import { ICategory } from '@/api/types';

const hydrateAction = createAction<SliceTypes>(HYDRATE);

interface ProductProjectionPagedQueryResponse {
  results: ProductProjection[];
  total: number;
}

const NO_PRODUCTS_COUNT = 0;
const FIRST_INDEX_OF_ARRAY = 0;
const LAST_INDEX_OF_ARRAY = -1;
const FRACTION_DIGITS_DEFAULT_MULT = 100;

export const getFilteredProducts = createAsyncThunk(
  'filter/fetchFilteredProducts',
  async (
    {
      filter,
      sort,
      limit,
      offset,
      search,
    }: {
      filter?: string[];
      sort?: string[];
      limit?: number;
      offset?: number;
      search?: string;
    },
    { getState }
  ): Promise<ProductProjectionPagedQueryResponse> => {
    const productController = new ProductController();

    const allState = getState() as RootState;

    const {
      filterCategory,
      sortBy,
      offSet,
      cardsLimitPerPage,
      filterByBrand,
      priceSliderValues,
      searchQuery,
    } = allState.filter;
    const allFiltersQueryString: string[] = [];

    const filterCategoryQueryString = filterCategory.length
      ? `categories.id:subtree("${filterCategory}")`
      : undefined;

    if (filterCategoryQueryString) {
      allFiltersQueryString.push(filterCategoryQueryString);
    }

    if (filterByBrand.length) {
      let res = '';
      filterByBrand.forEach((brand) => {
        res = `${res}"${brand}",`;
      });

      allFiltersQueryString.push(
        `variants.attributes.brand.key:${res}`.slice(
          FIRST_INDEX_OF_ARRAY,
          LAST_INDEX_OF_ARRAY
        )
      );
    }

    const { min, max } = priceSliderValues;
    if (min && max) {
      allFiltersQueryString.push(
        `variants.price.centAmount:range (${
          Number(min) * FRACTION_DIGITS_DEFAULT_MULT
        } to ${Number(max) * FRACTION_DIGITS_DEFAULT_MULT})`
      );
    }

    const sortQueryString = sortBy.length ? sortBy : undefined;

    const response = await productController.getProducts({
      filter: filter ?? allFiltersQueryString,
      sort: sort ?? sortQueryString,
      limit: limit ?? cardsLimitPerPage,
      offset: offset ?? offSet,
      search: search ?? searchQuery,
    });

    return {
      results: response.body?.results ?? [],
      total: response.body?.total ?? NO_PRODUCTS_COUNT,
    };
  }
);

export const getAllFilteredProductsWithoutLimit = createAsyncThunk(
  'filter/fetchAllFilteredProducts',
  async (
    {
      filter,
      sort,
      offset,
      search,
    }: {
      filter?: string[];
      sort?: string[];
      offset?: number;
      search?: string;
    },
    { getState }
  ): Promise<ProductProjectionPagedQueryResponse> => {
    const productController = new ProductController();

    const allState = getState() as RootState;

    const {
      filterCategory,
      sortBy,
      offSet,
      filterByBrand,
      priceSliderValues,
      searchQuery,
    } = allState.filter;
    const allFiltersQueryString: string[] = [];

    const filterCategoryQueryString = filterCategory.length
      ? `categories.id:subtree("${filterCategory}")`
      : undefined;

    if (filterCategoryQueryString) {
      allFiltersQueryString.push(filterCategoryQueryString);
    }

    if (filterByBrand.length) {
      let res = '';
      filterByBrand.forEach((brand) => {
        res = `${res}"${brand}",`;
      });

      allFiltersQueryString.push(
        `variants.attributes.brand.key:${res}`.slice(
          FIRST_INDEX_OF_ARRAY,
          LAST_INDEX_OF_ARRAY
        )
      );
    }

    const { min, max } = priceSliderValues;
    if (min && max) {
      allFiltersQueryString.push(
        `variants.price.centAmount:range (${
          Number(min) * FRACTION_DIGITS_DEFAULT_MULT
        } to ${Number(max) * FRACTION_DIGITS_DEFAULT_MULT})`
      );
    }

    const sortQueryString = sortBy.length ? sortBy : undefined;

    const response = await productController.getProducts({
      filter: filter ?? allFiltersQueryString,
      sort: sort ?? sortQueryString,
      limit: 500,
      offset: offset ?? offSet,
      search: search ?? searchQuery,
    });

    return {
      results: response.body?.results ?? [],
      total: response.body?.total ?? NO_PRODUCTS_COUNT,
    };
  }
);

export interface FilterState {
  filteredProducts: ProductProjection[];
  filteredAllProducts: ProductProjection[];
  filterByColor: [];
  filterByBrand: string[];
  filterCategory: string;
  priceSliderValues: {
    min: string;
    max: string;
  };
  filterPaginationPage: number;
  sortBy: string[];
  offSet: number;
  cardsLimitPerPage: number;
  totalFilteredProducts: number;
  searchQuery: string;
  filterBreadcrumbs: ICategory[];
}

const initialState: FilterState = {
  filteredProducts: [],
  filteredAllProducts: [],
  filterByColor: [],
  filterByBrand: [],
  filterCategory: '',
  priceSliderValues: {
    min: '',
    max: '',
  },
  filterPaginationPage: 0,
  sortBy: ['price asc'],
  offSet: 0,
  cardsLimitPerPage: 20,
  totalFilteredProducts: 0,
  searchQuery: '',
  filterBreadcrumbs: [],
};

enum ESlices {
  filter = 'filter',
}

type SliceTypes = Record<ESlices, string[]>;

export const filterSlice = createSlice({
  name: ESlices.filter,
  initialState,
  reducers: {
    setStateFilteredProducts(state: FilterState, action: PayloadAction<[]>) {
      return {
        ...state,
        filteredProducts: action.payload,
      };
    },
    setFilterCategory(state: FilterState, action: PayloadAction<string>) {
      return {
        ...state,
        filterCategory: action.payload,
        filterPaginationPage: 0,
      };
    },
    setMinSliderValue(state: FilterState, action: PayloadAction<string>) {
      return {
        ...state,
        priceSliderValues: { ...state.priceSliderValues, min: action.payload },
      };
    },
    setMaxSliderValue(state: FilterState, action: PayloadAction<string>) {
      return {
        ...state,
        priceSliderValues: { ...state.priceSliderValues, max: action.payload },
      };
    },
    updateFilterBrands(state: FilterState, action: PayloadAction<string>) {
      const { filterByBrand } = state;
      if (filterByBrand.includes(action.payload)) {
        return {
          ...state,
          filterByBrand: filterByBrand.includes(action.payload)
            ? filterByBrand.filter((brand) => brand !== action.payload)
            : filterByBrand,
          filterPaginationPage: 0,
        };
      }

      const newFilterByBrand = [...filterByBrand, action.payload];
      return { ...state, filterByBrand: newFilterByBrand };
    },
    setSortByValue(state: FilterState, action: PayloadAction<string>) {
      const newSortByValue = [action.payload];
      return {
        ...state,
        sortBy: newSortByValue,
        filterPaginationPage: 0,
      };
    },
    setOffsetValue(state: FilterState, action: PayloadAction<number>) {
      return {
        ...state,
        offSet: action.payload,
      };
    },
    setCardsLimitPerPage(state: FilterState, action: PayloadAction<number>) {
      return {
        ...state,
        cardsLimitPerPage: action.payload,
      };
    },
    setFilterPaginationPage(state: FilterState, action: PayloadAction<number>) {
      return {
        ...state,
        filterPaginationPage: action.payload,
      };
    },
    resetAllFilters(state: FilterState) {
      return {
        ...state,
        filterByBrand: [],
        filterCategory: '',
        priceSliderValues: {
          min: '',
          max: '',
        },
        filterPaginationPage: 0,
        sortBy: ['price asc'],
        offSet: 0,
        cardsLimitPerPage: 20,
      };
    },
    setSearchQueryString(state: FilterState, action: PayloadAction<string>) {
      return {
        ...state,
        searchQuery: action.payload,
      };
    },
    setFilterBreadCrumbs(
      state: FilterState,
      action: PayloadAction<ICategory[]>
    ) {
      return {
        ...state,
        filterBreadcrumbs: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      hydrateAction,
      (state: FilterState, action: PayloadAction<SliceTypes>): FilterState => ({
        ...state,
        ...action.payload.filter,
      })
    );
    builder.addCase(
      getFilteredProducts.fulfilled,
      (
        state: FilterState,
        action: PayloadAction<ProductProjectionPagedQueryResponse>
      ): FilterState => {
        const { results, total } = action.payload;
        const newFilteredProducts = [...results];
        return {
          ...state,
          filteredProducts: newFilteredProducts,
          totalFilteredProducts: total,
          searchQuery: '',
        };
      }
    );
    builder.addCase(
      getAllFilteredProductsWithoutLimit.fulfilled,
      (
        state: FilterState,
        action: PayloadAction<ProductProjectionPagedQueryResponse>
      ): FilterState => {
        const { results } = action.payload;
        const newFilteredProducts = [...results];
        return {
          ...state,
          filteredAllProducts: newFilteredProducts,
        };
      }
    );
  },
});

export const {
  setStateFilteredProducts,
  setFilterCategory,
  setMinSliderValue,
  setMaxSliderValue,
  updateFilterBrands,
  setFilterPaginationPage,
  setSortByValue,
  setOffsetValue,
  setCardsLimitPerPage,
  resetAllFilters,
  setSearchQueryString,
  setFilterBreadCrumbs,
} = filterSlice.actions;
export const selectFilterState = (state: RootState): FilterState =>
  state.filter;
export default filterSlice.reducer;
