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

const hydrateAction = createAction<SliceTypes>(HYDRATE);

interface ProductProjectionPagedQueryResponse {
  results: ProductProjection[];
  total: number;
}

const NO_PRODUCTS_COUNT = 0;

export const getFilteredProducts = createAsyncThunk(
  'filter/fetchFilteredProducts',
  async (_, { getState }): Promise<ProductProjectionPagedQueryResponse> => {
    const productController = new ProductController();

    const allState = getState() as RootState;

    const { filterCategory, sortBy, offSet, cardsLimitPerPage } =
      allState.filter;
    const allFiltersQueryString: string[] = [];

    const filterCategoryQueryString = filterCategory.length
      ? `categories.id:subtree("${filterCategory}")`
      : undefined;

    if (filterCategoryQueryString) {
      allFiltersQueryString.push(filterCategoryQueryString);
    }

    // const { min, max } = priceSliderValues;
    allFiltersQueryString.push(
      `variants.price.centAmount:range (0 to 90000000)`
    );

    const sortQueryString = sortBy.length ? sortBy : undefined;

    const response = await productController.getProducts({
      filter: allFiltersQueryString,
      sort: sortQueryString,
      limit: cardsLimitPerPage,
      offset: offSet,
    });

    return {
      results: response.body?.results ?? [],
      total: response.body?.total ?? NO_PRODUCTS_COUNT,
    };
  }
);

export interface FilterState {
  filteredProducts: ProductProjection[];
  filterByColor: [];
  filterByBrand: string[];
  filterCategory: string;
  priceSliderValues: {
    min: number;
    max: number;
  };
  filterPaginationPage: number;
  sortBy: string[];
  offSet: number;
  cardsLimitPerPage: number;
  totalFilteredProducts: number;
}

const initialState: FilterState = {
  filteredProducts: [],
  filterByColor: [],
  filterByBrand: [],
  filterCategory: '',
  priceSliderValues: {
    min: 0,
    max: 0,
  },
  filterPaginationPage: 0,
  sortBy: [],
  offSet: 0,
  cardsLimitPerPage: 20,
  totalFilteredProducts: 0,
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
      };
    },
    setMinSliderValue(state: FilterState, action: PayloadAction<number>) {
      return {
        ...state,
        priceSliderValues: { ...state.priceSliderValues, min: action.payload },
      };
    },
    setMaxSliderValue(state: FilterState, action: PayloadAction<number>) {
      return {
        ...state,
        priceSliderValues: { ...state.priceSliderValues, max: action.payload },
      };
    },
    updateFilterBrands(state: FilterState, action: PayloadAction<string[]>) {
      return {
        ...state,
        filterByBrand: action.payload,
      };
    },
    setSortByValue(state: FilterState, action: PayloadAction<string>) {
      const newSortByValue = [action.payload];
      return {
        ...state,
        sortBy: newSortByValue,
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
} = filterSlice.actions;
export const selectFilterState = (state: RootState): FilterState =>
  state.filter;
export default filterSlice.reducer;
