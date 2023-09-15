import {
  createSlice,
  PayloadAction,
  createAction,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { LineItem, CentPrecisionMoney } from '@commercetools/platform-sdk';
import { RootState } from '@/store/store';
import CartController from '@/api/controllers/CartController';

const hydrateAction = createAction<SliceTypes>(HYDRATE);

const ZERO_PRICE = 0;
const ZERO_QUANTITY = 0;

export interface IProductItem {
  productId: string;
  quantity: number;
  variantId?: number;
}

export interface ICartItems {
  totalPrice: CentPrecisionMoney;
  lineItems: LineItem[];
}

export const addProductToCart = createAsyncThunk(
  'cart/addProductToCart',
  async ({
    productId,
    quantity,
    variantId,
  }: IProductItem): Promise<ICartItems> => {
    const cartController = new CartController();

    const response = await cartController.addProduct({
      productId,
      quantity,
      variantId,
    });

    return {
      totalPrice: response?.totalPrice ?? {
        centAmount: ZERO_PRICE,
        currencyCode: 'USD',
        fractionDigits: 2,
        type: 'centPrecision',
      },
      lineItems: response?.lineItems ?? [],
    };
  }
);

export const removeProductLinesFromCart = createAsyncThunk(
  'cart/removeProductLinesFromCart',
  async (
    {
      productId,
      quantity,
    }: {
      productId: string;
      quantity?: number | null;
    },
    { getState }
  ): Promise<ICartItems> => {
    let productsToRemoveCount: number;
    if (quantity) {
      productsToRemoveCount = quantity;
    } else {
      const allState = getState() as RootState;
      const { userCartProducts } = allState.cart;
      productsToRemoveCount =
        userCartProducts.find((item) => item.productId === productId)
          ?.quantity ?? ZERO_QUANTITY;
    }
    const cartController = new CartController();

    const response = await cartController.removeProduct({
      productId,
      quantity: quantity ?? productsToRemoveCount,
    });

    return {
      totalPrice: response?.totalPrice ?? {
        centAmount: ZERO_PRICE,
        currencyCode: 'USD',
        fractionDigits: 2,
        type: 'centPrecision',
      },
      lineItems: response?.lineItems ?? [],
    };
  }
);

export interface CartState {
  userCartProducts: LineItem[];
  totalCartPrice: number;
}

const initialState: CartState = {
  userCartProducts: [],
  totalCartPrice: ZERO_PRICE,
};

enum ESlices {
  cart = 'cart',
}

type SliceTypes = Record<ESlices, string[]>;

export const cartSlice = createSlice({
  name: ESlices.cart,
  initialState,
  reducers: {
    setCartProducts(state: CartState, action: PayloadAction<LineItem[]>) {
      return {
        ...state,
        userCartProducts: action.payload,
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
    builder.addCase(
      addProductToCart.fulfilled,
      (
        state: CartState,
        action: PayloadAction<{
          totalPrice: CentPrecisionMoney;
          lineItems: LineItem[];
        }>
      ): CartState => {
        const { totalPrice, lineItems } = action.payload;
        const newCartProducts = [...lineItems];
        return {
          ...state,
          userCartProducts: newCartProducts,
          totalCartPrice: totalPrice.centAmount,
        };
      }
    );
    builder.addCase(
      removeProductLinesFromCart.fulfilled,
      (
        state: CartState,
        action: PayloadAction<{
          totalPrice: CentPrecisionMoney;
          lineItems: LineItem[];
        }>
      ): CartState => {
        const { totalPrice, lineItems } = action.payload;
        const newCartProducts = [...lineItems];
        return {
          ...state,
          userCartProducts: newCartProducts,
          totalCartPrice: totalPrice.centAmount,
        };
      }
    );
  },
});

export const { setCartProducts } = cartSlice.actions;
export const selectCartState = (state: RootState): CartState => state.cart;
export const getCartProducts = (state: RootState): LineItem[] =>
  state.cart.userCartProducts;

export default cartSlice.reducer;
