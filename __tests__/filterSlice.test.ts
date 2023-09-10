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

describe('Tests for filterSlice', () => {
  beforeEach(() => {
    store.dispatch(resetAllFilters());
  });

  test('initialize filterSlice with initialValue', () => {
    const { filter } = store.getState();
    expect(filter).toStrictEqual({
      filteredProducts: [],
      filteredAllProducts: [],
      filterByColor: [],
      filterByBrand: [],
      filterCategory: '',
      priceSliderValues: {
        min: '',
        max: '',
      },
      filterPaginationPage: 0,
      sortBy: ['price asc'],
      offSet: 0,
      cardsLimitPerPage: 20,
      totalFilteredProducts: 0,
      searchQuery: '',
      filterBreadcrumbs: [],
    });
  });

  test('change filteredProducts state with action', () => {
    store.dispatch(setStateFilteredProducts([]));
    const { filter } = store.getState();
    expect(filter).toStrictEqual({
      filteredProducts: [],
      filteredAllProducts: [],
      filterByColor: [],
      filterByBrand: [],
      filterCategory: '',
      priceSliderValues: {
        min: '',
        max: '',
      },
      filterPaginationPage: 0,
      sortBy: ['price asc'],
      offSet: 0,
      cardsLimitPerPage: 20,
      totalFilteredProducts: 0,
      searchQuery: '',
      filterBreadcrumbs: [],
    });
  });

  test('change filterCategory state with action', () => {
    store.dispatch(setFilterCategory('Original'));
    const { filter } = store.getState();
    expect(filter).toStrictEqual({
      filteredProducts: [],
      filteredAllProducts: [],
      filterByColor: [],
      filterByBrand: [],
      filterCategory: 'Original',
      priceSliderValues: {
        min: '',
        max: '',
      },
      filterPaginationPage: 0,
      sortBy: ['price asc'],
      offSet: 0,
      cardsLimitPerPage: 20,
      totalFilteredProducts: 0,
      searchQuery: '',
      filterBreadcrumbs: [],
    });
  });

  test('change min priceSliderValues state with action', () => {
    store.dispatch(setMinSliderValue('100'));
    const { filter } = store.getState();
    expect(filter).toStrictEqual({
      filteredProducts: [],
      filteredAllProducts: [],
      filterByColor: [],
      filterByBrand: [],
      filterCategory: '',
      priceSliderValues: {
        min: '100',
        max: '',
      },
      filterPaginationPage: 0,
      sortBy: ['price asc'],
      offSet: 0,
      cardsLimitPerPage: 20,
      totalFilteredProducts: 0,
      searchQuery: '',
      filterBreadcrumbs: [],
    });
  });

  test('change max priceSliderValues state with action', () => {
    store.dispatch(setMaxSliderValue('1000'));
    const { filter } = store.getState();
    expect(filter).toStrictEqual({
      filteredProducts: [],
      filteredAllProducts: [],
      filterByColor: [],
      filterByBrand: [],
      filterCategory: '',
      priceSliderValues: {
        min: '',
        max: '1000',
      },
      filterPaginationPage: 0,
      sortBy: ['price asc'],
      offSet: 0,
      cardsLimitPerPage: 20,
      totalFilteredProducts: 0,
      searchQuery: '',
      filterBreadcrumbs: [],
    });
  });

  test('change filterByBrand state with action', () => {
    store.dispatch(updateFilterBrands('Brand'));
    const { filter } = store.getState();
    expect(filter).toStrictEqual({
      filteredProducts: [],
      filteredAllProducts: [],
      filterByColor: [],
      filterByBrand: ['Brand'],
      filterCategory: '',
      priceSliderValues: {
        min: '',
        max: '',
      },
      filterPaginationPage: 0,
      sortBy: ['price asc'],
      offSet: 0,
      cardsLimitPerPage: 20,
      totalFilteredProducts: 0,
      searchQuery: '',
      filterBreadcrumbs: [],
    });
  });

  test('change sortBy state with action', () => {
    store.dispatch(setSortByValue('price desc'));
    const { filter } = store.getState();
    expect(filter).toStrictEqual({
      filteredProducts: [],
      filteredAllProducts: [],
      filterByColor: [],
      filterByBrand: [],
      filterCategory: '',
      priceSliderValues: {
        min: '',
        max: '',
      },
      filterPaginationPage: 0,
      sortBy: ['price desc'],
      offSet: 0,
      cardsLimitPerPage: 20,
      totalFilteredProducts: 0,
      searchQuery: '',
      filterBreadcrumbs: [],
    });
  });

  test('change offSet state with action', () => {
    store.dispatch(setOffsetValue(40));
    const { filter } = store.getState();
    expect(filter).toStrictEqual({
      filteredProducts: [],
      filteredAllProducts: [],
      filterByColor: [],
      filterByBrand: [],
      filterCategory: '',
      priceSliderValues: {
        min: '',
        max: '',
      },
      filterPaginationPage: 0,
      sortBy: ['price asc'],
      offSet: 40,
      cardsLimitPerPage: 20,
      totalFilteredProducts: 0,
      searchQuery: '',
      filterBreadcrumbs: [],
    });
  });

  test('change cardsLimitPerPage state with action', () => {
    store.dispatch(setCardsLimitPerPage(10));
    const { filter } = store.getState();
    expect(filter).toStrictEqual({
      filteredProducts: [],
      filteredAllProducts: [],
      filterByColor: [],
      filterByBrand: [],
      filterCategory: '',
      priceSliderValues: {
        min: '',
        max: '',
      },
      filterPaginationPage: 0,
      sortBy: ['price asc'],
      offSet: 0,
      cardsLimitPerPage: 10,
      totalFilteredProducts: 0,
      searchQuery: '',
      filterBreadcrumbs: [],
    });
  });

  test('change filterPaginationPage state with action', () => {
    store.dispatch(setFilterPaginationPage(5));
    const { filter } = store.getState();
    expect(filter).toStrictEqual({
      filteredProducts: [],
      filteredAllProducts: [],
      filterByColor: [],
      filterByBrand: [],
      filterCategory: '',
      priceSliderValues: {
        min: '',
        max: '',
      },
      filterPaginationPage: 5,
      sortBy: ['price asc'],
      offSet: 0,
      cardsLimitPerPage: 20,
      totalFilteredProducts: 0,
      searchQuery: '',
      filterBreadcrumbs: [],
    });
  });

  test('change searchQuery state with action', () => {
    store.dispatch(setSearchQueryString('search phrase'));
    const { filter } = store.getState();
    expect(filter).toStrictEqual({
      filteredProducts: [],
      filteredAllProducts: [],
      filterByColor: [],
      filterByBrand: [],
      filterCategory: '',
      priceSliderValues: {
        min: '',
        max: '',
      },
      filterPaginationPage: 0,
      sortBy: ['price asc'],
      offSet: 0,
      cardsLimitPerPage: 20,
      totalFilteredProducts: 0,
      searchQuery: 'search phrase',
      filterBreadcrumbs: [],
    });
  });

  test('change filterBreadcrumbs state with action', () => {
    store.dispatch(
      setFilterBreadCrumbs([{ id: 'category-id', name: 'category-name' }])
    );
    const { filter } = store.getState();
    expect(filter).toStrictEqual({
      filteredProducts: [],
      filteredAllProducts: [],
      filterByColor: [],
      filterByBrand: [],
      filterCategory: '',
      priceSliderValues: {
        min: '',
        max: '',
      },
      filterPaginationPage: 0,
      sortBy: ['price asc'],
      offSet: 0,
      cardsLimitPerPage: 20,
      totalFilteredProducts: 0,
      searchQuery: 'search phrase',
      filterBreadcrumbs: [{ id: 'category-id', name: 'category-name' }],
    });
  });
});
