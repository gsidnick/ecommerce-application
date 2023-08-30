import {
  createSlice,
  PayloadAction,
  createAction,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { RootState } from '@/store/store';
import ProductController from '@/api/controllers/ProductController';

const hydrateAction = createAction<SliceTypes>(HYDRATE);

export const getFilteredProducts = createAsyncThunk(
  'filter/fetchFilteredProducts',
  async () => {
    const productController = new ProductController();
    console.log('getFilteredProducts in slice');
    const response = await productController.getProducts(); // change to getFilteredProducts
    console.log('response', response);

    // return response;
    // return response.data;
  }
);

export interface FilterState {
  filteredProducts: [];
  filterByColor: [];
  filterByBrand: string[];
  filterCategory: [] | null;
  priceSliderValues: {
    min: number;
    max: number;
  };
  filterPaginationPage: number;
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
    // builder.addCase(
    //   getFilteredProducts.fulfilled,
    //   (state: FilterState, action: PayloadAction<unknown>): void => {
    //     state.filteredProducts = action.payload as [];
    //   }
    // );
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
