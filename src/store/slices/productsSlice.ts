import { createSlice, PayloadAction, createAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { RootState } from '@/store/store';

const hydrateAction = createAction<SliceTypes>(HYDRATE);

export interface ProductsState {
    products: [];
}

const initialState: ProductsState = {
  products: [],
};

enum ESlices {
  products = 'products',
}

type SliceTypes = Record<ESlices, string[]>;

export const productsSlice = createSlice({
  name: ESlices.products,
  initialState,
  reducers: {
    setStateProducts(
      state: ProductsState,
      action: PayloadAction<[]>
    ) {
      return {
        ...state,
        products: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      hydrateAction,
      (
        state: ProductsState,
        action: PayloadAction<SliceTypes>
      ): ProductsState => ({
        ...state,
        ...action.payload.products,
      })
    );
  },
});

export const { setStateProducts } = productsSlice.actions;
export const selectProductState = (state: RootState): ProductsState => state.products;
export default productsSlice.reducer;
