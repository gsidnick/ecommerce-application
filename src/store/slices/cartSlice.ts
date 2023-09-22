import {
  createSlice,
  PayloadAction,
  createAction,
  createAsyncThunk,
} from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import {
  LineItem,
  CentPrecisionMoney,
  Cart,
} from '@commercetools/platform-sdk';
import { ClientResponse } from '@commercetools/sdk-client-v2';
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
  cartId?: string;
}

export const loadUserCart = createAsyncThunk('cart/loadUserCart', async () => {
  const cartController = new CartController();
  const response = await cartController.getCart();

  return {
    totalPrice: (response as ClientResponse<Cart>).body?.totalPrice ?? {
      centAmount: ZERO_PRICE,
      currencyCode: 'USD',
      fractionDigits: 2,
      type: 'centPrecision',
    },
    lineItems: (response as ClientResponse<Cart>).body?.lineItems ?? [],
  };
});

export const addProductToCart = createAsyncThunk(
  'cart/addProductToCart',
  async (
    { productId, quantity, variantId }: IProductItem,
    { getState }
  ): Promise<ICartItems> => {
    const cartController = new CartController();

    const allState = getState() as RootState;

    let { cartId } = allState.cart;

    if (allState.cart.cartId === '') {
      cartId =
        ((await cartController.createCart()) as ClientResponse<Cart>).body
          ?.id ?? '';
    }

    const response = await cartController.addProduct({
      productId,
      quantity,
      variantId,
      cartId,
    });

    return {
      totalPrice: (response as ClientResponse<Cart>).body?.totalPrice ?? {
        centAmount: ZERO_PRICE,
        currencyCode: 'USD',
        fractionDigits: 2,
        type: 'centPrecision',
      },
      lineItems: (response as ClientResponse<Cart>).body?.lineItems ?? [],
      cartId,
    };
  }
);

export const updateProductInCart = createAsyncThunk(
  'cart/updateProductInCart',
  async ({ productId, quantity }: IProductItem): Promise<ICartItems> => {
    const cartController = new CartController();

    const response = await cartController.updateProduct({
      productId,
      quantity,
    });

    return {
      totalPrice: (response as ClientResponse<Cart>).body?.totalPrice ?? {
        centAmount: ZERO_PRICE,
        currencyCode: 'USD',
        fractionDigits: 2,
        type: 'centPrecision',
      },
      lineItems: (response as ClientResponse<Cart>).body?.lineItems ?? [],
    };
  }
);

export const updateCart = createAsyncThunk(
  'cart/updateCart',
  async (): Promise<ICartItems> => {
    const cartController = new CartController();

    const response = await cartController.getCart();

    return {
      totalPrice: (response as ClientResponse<Cart>).body?.totalPrice ?? {
        centAmount: ZERO_PRICE,
        currencyCode: 'USD',
        fractionDigits: 2,
        type: 'centPrecision',
      },
      lineItems: (response as ClientResponse<Cart>).body?.lineItems ?? [],
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
      totalPrice: (response as ClientResponse<Cart>).body?.totalPrice ?? {
        centAmount: ZERO_PRICE,
        currencyCode: 'USD',
        fractionDigits: 2,
        type: 'centPrecision',
      },
      lineItems: (response as ClientResponse<Cart>).body?.lineItems ?? [],
    };
  }
);

export interface CartState {
  userCartProducts: LineItem[];
  totalCartPrice: number;
  activePromocode: string;
  cartId: string;
}

const initialState: CartState = {
  userCartProducts: [],
  totalCartPrice: ZERO_PRICE,
  activePromocode: '',
  cartId: '',
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
    setPromocode(state: CartState, action: PayloadAction<string>) {
      return {
        ...state,
        activePromocode: action.payload,
      };
    },
    setCartId(state: CartState, action: PayloadAction<string>) {
      return {
        ...state,
        cartId: action.payload,
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
      loadUserCart.fulfilled,
      (
        state: CartState,
        action: PayloadAction<{
          totalPrice: CentPrecisionMoney;
          lineItems: LineItem[];
          cartId?: string;
        }>
      ) => {
        const { totalPrice, lineItems } = action.payload;
        return {
          ...state,
          userCartProducts: lineItems,
          totalCartPrice: totalPrice.centAmount,
        };
      }
    );
    builder.addCase(
      addProductToCart.fulfilled,
      (
        state: CartState,
        action: PayloadAction<{
          totalPrice: CentPrecisionMoney;
          lineItems: LineItem[];
          cartId?: string;
        }>
      ): CartState => {
        const { totalPrice, lineItems, cartId } = action.payload;
        const newCartProducts = [...lineItems];
        return {
          ...state,
          userCartProducts: newCartProducts,
          totalCartPrice: totalPrice.centAmount,
          cartId: cartId ?? '',
        };
      }
    );
    builder.addCase(
      updateCart.fulfilled,
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
      updateProductInCart.fulfilled,
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

export const { setCartProducts, setPromocode, setCartId } = cartSlice.actions;
export const selectCartState = (state: RootState): CartState => state.cart;
export const getPromoCode = (state: RootState): string =>
  state.cart.activePromocode;
export const getCartProducts = (state: RootState): LineItem[] =>
  state.cart.userCartProducts;
export const getCartTotal = (state: RootState): number =>
  state.cart.totalCartPrice;
export const getCartId = (state: RootState): string => state.cart.cartId;

export default cartSlice.reducer;
