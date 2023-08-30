import { createSlice, PayloadAction, createAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { RootState } from '@/store/store';

const hydrateAction = createAction<SliceTypes>(HYDRATE);

export interface FilterState {
  filteredProducts: [];
  filterByColor: [];
  filterByBrand: [];
  filterCategory: [] | null;
  priceSliderValues: {
    min: number;
    max: number;
  };
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
  },
  extraReducers: (builder) => {
    builder.addCase(
      hydrateAction,
      (state: FilterState, action: PayloadAction<SliceTypes>): FilterState => ({
        ...state,
        ...action.payload.filter,
      })
    );
  },
});

export const {
  setStateFilteredProducts,
  setMinSliderValue,
  setMaxSliderValue,
} = filterSlice.actions;
export const selectFilterState = (state: RootState): FilterState =>
  state.filter;
export default filterSlice.reducer;
