import { createSlice, PayloadAction, createAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { RootState } from '@/store/store';
import { BasketItem } from '../../api/types';

const hydrateAction = createAction<SliceTypes>(HYDRATE);

export interface BasketState {
  basketId: string;
  basketItems: BasketItem[];
}

const initialState: BasketState = {
  basketId: '',
  basketItems: [],
};

enum ESlices {
  basket = 'basket',
}

type SliceTypes = Record<ESlices, string[]>;

export const basketSlice = createSlice({
  name: ESlices.basket,
  initialState,
  reducers: {
    setBasketId(state: BasketState, action: PayloadAction<string>) {
      return {
        ...state,
        basketId: action.payload,
      };
    },
    setBasketItems(state: BasketState, action: PayloadAction<BasketItem[]>) {
      return {
        ...state,
        basketItems: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      hydrateAction,
      (state: BasketState, action: PayloadAction<SliceTypes>): BasketState => ({
        ...state,
        ...action.payload.basket,
      })
    );
  },
});

export const { setBasketId, setBasketItems } = basketSlice.actions;
export const selectBasketState = (state: RootState): BasketState =>
  state.basket;
export default basketSlice.reducer;
