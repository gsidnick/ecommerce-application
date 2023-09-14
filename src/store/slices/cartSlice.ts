import { createSlice, PayloadAction, createAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { RootState } from '@/store/store';
import { CartItem } from '../../api/types';

const hydrateAction = createAction<SliceTypes>(HYDRATE);

export interface CartState {
  cartId: string;
  cartItems: CartItem[];
}

const initialState: CartState = {
  cartId: '',
  cartItems: [],
};

enum ESlices {
  cart = 'cart',
}

type SliceTypes = Record<ESlices, string[]>;

export const cartSlice = createSlice({
  name: ESlices.cart,
  initialState,
  reducers: {
    setCartId(state: CartState, action: PayloadAction<string>) {
      return {
        ...state,
        cartId: action.payload,
      };
    },
    setCartItems(state: CartState, action: PayloadAction<CartItem[]>) {
      return {
        ...state,
        cartItems: action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      hydrateAction,
      (state: CartState, action: PayloadAction<SliceTypes>): CartState => ({
        ...state,
        ...action.payload.cart,
      })
    );
  },
});

export const { setCartId, setCartItems } = cartSlice.actions;
export const selectCartState = (state: RootState): CartState => state.cart;
export default cartSlice.reducer;
