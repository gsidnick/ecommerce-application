import { store } from '@/store/store';
import {
  setStateProducts,
  setVariantOfCurrentProduct,
} from '@/store/slices/productsSlice';

describe('Tests for productsSlice', () => {
  beforeEach(() => {
    store.dispatch(setStateProducts([]));
  });

  test('initialize productsSlice with initialValue', () => {
    const { products } = store.getState();
    expect(products).toStrictEqual({
      products: [],
      categories: [],
      variantIdOfCurrentProduct: 1,
    });
  });

  test('initialize products with action', () => {
    store.dispatch(setStateProducts([]));
    const { products } = store.getState();
    expect(products).toStrictEqual({
      products: [],
      categories: [],
      variantIdOfCurrentProduct: 1,
    });
  });

  test('initialize variantIdOfCurrentProduct with action', () => {
    store.dispatch(setVariantOfCurrentProduct(2));
    const { products } = store.getState();
    expect(products).toStrictEqual({
      products: [],
      categories: [],
      variantIdOfCurrentProduct: 2,
    });
  });
});
