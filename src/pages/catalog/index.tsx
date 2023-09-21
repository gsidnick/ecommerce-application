/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ReactElement, useEffect, useRef, useState } from 'react';
import SideBar from '../../components/SideBar';
import FilterPanelContainer from '@/components/FilterPanelContainer';
import Loading from '@/components/Loading';
import SortButtonsPanel from '@/components/SortButtonsPanel';
import FilteredProductContainer from '@/components/FilteredProductContainer';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import {
  getFilteredProducts,
  getAllFilteredProductsWithoutLimit,
  selectFilterState,
} from '@/store/slices/filterSlice';
import { getAllCategories } from '@/store/slices/productsSlice';
import styles from './styles.module.css';
import {
  WIDTH_MAX,
  WIDTH_XL,
  WIDTH_LG,
  WIDTH_MD,
  WIDTH_SM,
  WIDTH_MIN,
  NUMBER_ITEMS_PER_PAGE_MAX,
  NUMBER_ITEMS_PER_PAGE_XL,
  NUMBER_ITEMS_PER_PAGE_LG,
  NUMBER_ITEMS_PER_PAGE_MD,
  NUMBER_ITEMS_PER_PAGE_SM,
  NUMBER_ITEMS_PER_PAGE_MIN,
} from '@/components/FilteredProductContainer/constants';
import { extractAllBrands } from '@/helpers/productsHelpers';
import CategoryBreadcrumbs from '@/components/CategoryBreadcrumbs';
import useWidth from '@/hooks/useWidth';

function Catalog(): ReactElement {
  const dispatch = useAppDispatch();
  const {
    filteredProducts,
    totalFilteredProducts,
    filterCategory,
    filteredAllProducts,
    filterPaginationPage,
    priceSliderValues: { min, max },
    isLoading,
  } = useAppSelector(selectFilterState);
  const [brands, setBrands] = useState<string[]>(
    extractAllBrands(filteredAllProducts)
  );
  const filterBlockRef = useRef<HTMLDivElement>(null);

  const width = useWidth();

  useEffect(() => {
    const fetchProducts = (): void => {
      dispatch(getFilteredProducts({}));
    };
    const fetchCategories = (): void => {
      dispatch(getAllCategories());
    };

    const fetchAllProductsWithoutLimit = (): void => {
      dispatch(getAllFilteredProductsWithoutLimit({}));
    };

    fetchCategories();
    fetchProducts();
    fetchAllProductsWithoutLimit();
  }, []);

  useEffect(() => {
    const getProducts = (): void => {
      dispatch(getFilteredProducts({}));
      dispatch(getAllFilteredProductsWithoutLimit({}));
    };

    getProducts();
  }, [filterCategory]);

  useEffect(() => {
    const brandsArr = extractAllBrands(filteredAllProducts);
    setBrands(brandsArr);
  }, [filteredAllProducts]);

  useEffect(() => {
    const getProducts = (): void => {
      dispatch(getFilteredProducts({}));
    };

    getProducts();
  }, [filterPaginationPage, min, max]);

  const filterToggleHandler = (): void => {
    filterBlockRef.current?.classList.toggle(styles.transl);
  };

  const getItemsPerPage = (): number => {
    if (width > WIDTH_MAX) {
      return NUMBER_ITEMS_PER_PAGE_MAX;
    }
    if (width > WIDTH_XL && width <= WIDTH_MAX) {
      return NUMBER_ITEMS_PER_PAGE_XL;
    }
    if (width > WIDTH_LG && width <= WIDTH_XL) {
      return NUMBER_ITEMS_PER_PAGE_LG;
    }
    if (width > WIDTH_MD && width <= WIDTH_LG) {
      return NUMBER_ITEMS_PER_PAGE_MD;
    }
    if (width > WIDTH_SM && width <= WIDTH_MD) {
      return NUMBER_ITEMS_PER_PAGE_SM;
    }
    if (width > WIDTH_MIN && width <= WIDTH_SM) {
      return NUMBER_ITEMS_PER_PAGE_MD;
    }
    if (width <= WIDTH_MIN) {
      return NUMBER_ITEMS_PER_PAGE_MIN;
    }
    return NUMBER_ITEMS_PER_PAGE_MAX;
  };

  return (
    <div className="relative grid grid-cols-[auto] md:grid-cols-[300px_auto]">
      {isLoading && (
        <div className="absolute left-0 top-0 z-[9999] flex h-full w-full items-center justify-center">
          <Loading />
        </div>
      )}
      <div className="h-full bg-background-main">
        <div className="h-[56px] bg-background-main p-3">
          <span
            onClick={filterToggleHandler}
            className="block cursor-pointer whitespace-nowrap bg-background-main text-lg text-white md:hidden"
          >
            Show filter
          </span>
          <span className="hidden whitespace-nowrap bg-background-main text-lg text-white md:block">
            Filters
          </span>
        </div>
        <div
          ref={filterBlockRef}
          className="absolute left-[-300px]  z-50 h-full w-[50px] bg-background-main md:relative md:left-0 md:w-[300px]"
        >
          <SideBar className="w-72 flex-none" />
          <div className="w-[300px] bg-background-main text-white">
            <FilterPanelContainer filteredBrands={brands} />
          </div>
        </div>
      </div>
      <div className="mb-8 flex flex-1 flex-wrap justify-between gap-2 p-4">
        <div className="flex-1">
          <CategoryBreadcrumbs />
          <SortButtonsPanel productsCount={totalFilteredProducts} />
          <FilteredProductContainer
            filteredProducts={filteredProducts}
            itemsPerPage={getItemsPerPage()}
          />
        </div>
      </div>
    </div>
  );
}

export default Catalog;
