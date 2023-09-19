import { store } from '@/store/store';
import {
  resetAllFilters,
  setCardsLimitPerPage,
  setFilterBreadCrumbs,
  setFilterCategory,
  setFilterPaginationPage,
  setMaxSliderValue,
  setMinSliderValue,
  setOffsetValue,
  setSearchQueryString,
  setSortByValue,
  setStateFilteredProducts,
  updateFilterBrands,
} from '@/store/slices/filterSlice';
import { LineItem } from '@commercetools/platform-sdk';
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

  // test('change filteredProducts state with action', () => {
  //   store.dispatch(setStateFilteredProducts([]));
  //   const { filter } = store.getState();
  //   expect(filter).toStrictEqual({
  //     isLoading: false,
  //     filteredProducts: [],
  //     filteredAllProducts: [],
  //     filterByColor: [],
  //     filterByBrand: [],
  //     filterCategory: '',
  //     priceSliderValues: {
  //       min: 0,
  //       max: 0,
  //     },
  //     filterPaginationPage: 0,
  //     sortBy: ['price asc'],
  //     offSet: 0,
  //     cardsLimitPerPage: 20,
  //     totalFilteredProducts: 0,
  //     searchQuery: '',
  //     filterBreadcrumbs: [],
  //   });
  // });
  //
  // test('change filterCategory state with action', () => {
  //   store.dispatch(setFilterCategory('Original'));
  //   const { filter } = store.getState();
  //   expect(filter).toStrictEqual({
  //     isLoading: false,
  //     filteredProducts: [],
  //     filteredAllProducts: [],
  //     filterByColor: [],
  //     filterByBrand: [],
  //     filterCategory: 'Original',
  //     priceSliderValues: {
  //       min: 0,
  //       max: 0,
  //     },
  //     filterPaginationPage: 0,
  //     sortBy: ['price asc'],
  //     offSet: 0,
  //     cardsLimitPerPage: 20,
  //     totalFilteredProducts: 0,
  //     searchQuery: '',
  //     filterBreadcrumbs: [],
  //   });
  // });
  //
  // test('change min priceSliderValues state with action', () => {
  //   store.dispatch(setMinSliderValue(100));
  //   const { filter } = store.getState();
  //   expect(filter).toStrictEqual({
  //     isLoading: false,
  //     filteredProducts: [],
  //     filteredAllProducts: [],
  //     filterByColor: [],
  //     filterByBrand: [],
  //     filterCategory: '',
  //     priceSliderValues: {
  //       min: 100,
  //       max: 0,
  //     },
  //     filterPaginationPage: 0,
  //     sortBy: ['price asc'],
  //     offSet: 0,
  //     cardsLimitPerPage: 20,
  //     totalFilteredProducts: 0,
  //     searchQuery: '',
  //     filterBreadcrumbs: [],
  //   });
  // });
  //
  // test('change max priceSliderValues state with action', () => {
  //   store.dispatch(setMaxSliderValue(1000));
  //   const { filter } = store.getState();
  //   expect(filter).toStrictEqual({
  //     isLoading: false,
  //     filteredProducts: [],
  //     filteredAllProducts: [],
  //     filterByColor: [],
  //     filterByBrand: [],
  //     filterCategory: '',
  //     priceSliderValues: {
  //       min: 0,
  //       max: 1000,
  //     },
  //     filterPaginationPage: 0,
  //     sortBy: ['price asc'],
  //     offSet: 0,
  //     cardsLimitPerPage: 20,
  //     totalFilteredProducts: 0,
  //     searchQuery: '',
  //     filterBreadcrumbs: [],
  //   });
  // });
  //
  // test('change filterByBrand state with action', () => {
  //   store.dispatch(updateFilterBrands('Brand'));
  //   const { filter } = store.getState();
  //   expect(filter).toStrictEqual({
  //     isLoading: false,
  //     filteredProducts: [],
  //     filteredAllProducts: [],
  //     filterByColor: [],
  //     filterByBrand: ['Brand'],
  //     filterCategory: '',
  //     priceSliderValues: {
  //       min: 0,
  //       max: 0,
  //     },
  //     filterPaginationPage: 0,
  //     sortBy: ['price asc'],
  //     offSet: 0,
  //     cardsLimitPerPage: 20,
  //     totalFilteredProducts: 0,
  //     searchQuery: '',
  //     filterBreadcrumbs: [],
  //   });
  // });
  //
  // test('change sortBy state with action', () => {
  //   store.dispatch(setSortByValue('price desc'));
  //   const { filter } = store.getState();
  //   expect(filter).toStrictEqual({
  //     isLoading: false,
  //     filteredProducts: [],
  //     filteredAllProducts: [],
  //     filterByColor: [],
  //     filterByBrand: [],
  //     filterCategory: '',
  //     priceSliderValues: {
  //       min: 0,
  //       max: 0,
  //     },
  //     filterPaginationPage: 0,
  //     sortBy: ['price desc'],
  //     offSet: 0,
  //     cardsLimitPerPage: 20,
  //     totalFilteredProducts: 0,
  //     searchQuery: '',
  //     filterBreadcrumbs: [],
  //   });
  // });
  //
  // test('change offSet state with action', () => {
  //   store.dispatch(setOffsetValue(40));
  //   const { filter } = store.getState();
  //   expect(filter).toStrictEqual({
  //     isLoading: false,
  //     filteredProducts: [],
  //     filteredAllProducts: [],
  //     filterByColor: [],
  //     filterByBrand: [],
  //     filterCategory: '',
  //     priceSliderValues: {
  //       min: 0,
  //       max: 0,
  //     },
  //     filterPaginationPage: 0,
  //     sortBy: ['price asc'],
  //     offSet: 40,
  //     cardsLimitPerPage: 20,
  //     totalFilteredProducts: 0,
  //     searchQuery: '',
  //     filterBreadcrumbs: [],
  //   });
  // });
  //
  // test('change cardsLimitPerPage state with action', () => {
  //   store.dispatch(setCardsLimitPerPage(10));
  //   const { filter } = store.getState();
  //   expect(filter).toStrictEqual({
  //     isLoading: false,
  //     filteredProducts: [],
  //     filteredAllProducts: [],
  //     filterByColor: [],
  //     filterByBrand: [],
  //     filterCategory: '',
  //     priceSliderValues: {
  //       min: 0,
  //       max: 0,
  //     },
  //     filterPaginationPage: 0,
  //     sortBy: ['price asc'],
  //     offSet: 0,
  //     cardsLimitPerPage: 10,
  //     totalFilteredProducts: 0,
  //     searchQuery: '',
  //     filterBreadcrumbs: [],
  //   });
  // });
  //
  // test('change filterPaginationPage state with action', () => {
  //   store.dispatch(setFilterPaginationPage(5));
  //   const { filter } = store.getState();
  //   expect(filter).toStrictEqual({
  //     isLoading: false,
  //     filteredProducts: [],
  //     filteredAllProducts: [],
  //     filterByColor: [],
  //     filterByBrand: [],
  //     filterCategory: '',
  //     priceSliderValues: {
  //       min: 0,
  //       max: 0,
  //     },
  //     filterPaginationPage: 5,
  //     sortBy: ['price asc'],
  //     offSet: 0,
  //     cardsLimitPerPage: 20,
  //     totalFilteredProducts: 0,
  //     searchQuery: '',
  //     filterBreadcrumbs: [],
  //   });
  // });
  //
  // test('change searchQuery state with action', () => {
  //   store.dispatch(setSearchQueryString(''));
  //   const { filter } = store.getState();
  //   expect(filter).toStrictEqual({
  //     isLoading: false,
  //     filteredProducts: [],
  //     filteredAllProducts: [],
  //     filterByColor: [],
  //     filterByBrand: [],
  //     filterCategory: '',
  //     priceSliderValues: {
  //       min: 0,
  //       max: 0,
  //     },
  //     filterPaginationPage: 0,
  //     sortBy: ['price asc'],
  //     offSet: 0,
  //     cardsLimitPerPage: 20,
  //     totalFilteredProducts: 0,
  //     searchQuery: '',
  //     filterBreadcrumbs: [],
  //   });
  // });
  //
  // test('change filterBreadcrumbs state with action', () => {
  //   store.dispatch(
  //     setFilterBreadCrumbs([{ id: 'category-id', name: 'category-name' }])
  //   );
  //   const { filter } = store.getState();
  //   expect(filter).toStrictEqual({
  //     isLoading: false,
  //     filteredProducts: [],
  //     filteredAllProducts: [],
  //     filterByColor: [],
  //     filterByBrand: [],
  //     filterCategory: '',
  //     priceSliderValues: {
  //       min: 0,
  //       max: 0,
  //     },
  //     filterPaginationPage: 0,
  //     sortBy: ['price asc'],
  //     offSet: 0,
  //     cardsLimitPerPage: 20,
  //     totalFilteredProducts: 0,
  //     searchQuery: '',
  //     filterBreadcrumbs: [{ id: 'category-id', name: 'category-name' }],
  //   });
  // });
});
