/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ReactElement, useEffect, useRef, useState } from 'react';
import SideBar from '../../components/SideBar';
import FilterPanelContainer from '@/components/FilterPanelContainer';
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
import { DEFAULT_LIMIT } from '@/api/constants';
import { extractAllBrands } from '@/helpers/productsHelpers';
import CategoryBreadcrumbs from '@/components/CategoryBreadcrumbs';

function Catalog(): ReactElement {
  const dispatch = useAppDispatch();
  const {
    filteredProducts,
    totalFilteredProducts,
    filterCategory,
    filteredAllProducts,
    filterPaginationPage,
    priceSliderValues: { min, max },
  } = useAppSelector(selectFilterState);
  const [brands, setBrands] = useState<string[]>([]);
  const filterBlockRef = useRef<HTMLDivElement>(null);

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
    const brandsArr = extractAllBrands(filteredAllProducts);

    fetchCategories();
    fetchProducts();
    fetchAllProductsWithoutLimit();

    setBrands(brandsArr);
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

  return (
    <div className={styles.container}>
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
          <div className={`${styles.filterPanelWrapper} text-white`}>
            <FilterPanelContainer filteredBrands={brands} />
          </div>
        </div>
      </div>
      <div className="mb-8 flex flex-1 flex-wrap justify-between gap-2 px-5">
        <div className="flex-1">
          <CategoryBreadcrumbs />
          <SortButtonsPanel productsCount={totalFilteredProducts} />
          <FilteredProductContainer
            filteredProducts={filteredProducts}
            itemsPerPage={DEFAULT_LIMIT}
          />
        </div>
      </div>
    </div>
  );
}

export default Catalog;
