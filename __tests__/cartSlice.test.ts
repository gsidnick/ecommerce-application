import { store } from '@/store/store';
import {
  setCartId,
  setCartProducts,
  setPromocode,
} from '@/store/slices/cartSlice';

describe('Tests for cartSlice', () => {
  beforeEach(() => {
    store.dispatch(setCartId(''));
    store.dispatch(setPromocode(''));
    store.dispatch(setCartProducts([]));
  });

  test('initialize cartSlice with initialValue', () => {
    const { cart } = store.getState();
    expect(cart).toStrictEqual({
      cartId: '',
      activePromocode: '',
      totalCartPrice: 0,
      userCartProducts: [],
    });
  });

  test('change cartId state with action', () => {
    store.dispatch(setCartId('test-cart-id'));
    const { cart } = store.getState();
    expect(cart).toStrictEqual({
      cartId: 'test-cart-id',
      activePromocode: '',
      totalCartPrice: 0,
      userCartProducts: [],
    });
  });

  test('change activePromocode state with action', () => {
    store.dispatch(setPromocode('test-promo-code'));
    const { cart } = store.getState();
    expect(cart).toStrictEqual({
      cartId: '',
      activePromocode: 'test-promo-code',
      totalCartPrice: 0,
      userCartProducts: [],
    });
  });

  test('change setCartProducts state with action', () => {
    // @ts-ignore
    store.dispatch(setCartProducts(['test-product-1', 'test-product-2']));
    const { cart } = store.getState();
    expect(cart).toStrictEqual({
      cartId: '',
      activePromocode: '',
      totalCartPrice: 0,
      userCartProducts: ['test-product-1', 'test-product-2'],
    });
  });
});
