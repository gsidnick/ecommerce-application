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
  async (): Promise<ProductProjectionPagedQueryResponse> => {
    const productController = new ProductController();
    const response = await productController.getProducts(); // change to getFilteredProducts
    console.log('response', response);

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
  filterCategory: [] | null;
  priceSliderValues: {
    min: number;
    max: number;
  };
  filterPaginationPage: number;
  totalFilteredProducts: number;
}

const initialState: FilterState = {
  filteredProducts: [],
  filterByColor: [],
  filterByBrand: [],
  filterCategory: null,
  priceSliderValues: {
    min: 0,
    max: 0,
  },
  filterPaginationPage: 0,
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
        const newFilteredProducts = [...state.filteredProducts, ...results];
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
  setMinSliderValue,
  setMaxSliderValue,
  updateFilterBrands,
  setFilterPaginationPage,
} = filterSlice.actions;
export const selectFilterState = (state: RootState): FilterState =>
  state.filter;
export default filterSlice.reducer;
