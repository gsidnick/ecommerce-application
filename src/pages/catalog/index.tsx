import { ReactElement, useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
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

  useEffect(() => {
    const fetchProducts = async (): Promise<void> => {
      await dispatch(getFilteredProducts({}));
    };
    const fetchCategories = async (): Promise<void> => {
      await dispatch(getAllCategories());
    };

    const fetchAllProductsWithoutLimit = async (): Promise<void> => {
      await dispatch(getAllFilteredProductsWithoutLimit({}));
    };
    const brandsArr = extractAllBrands(filteredAllProducts);

    void fetchCategories();
    void fetchProducts();
    void fetchAllProductsWithoutLimit();

    setBrands(brandsArr);
  }, []);

  useEffect(() => {
    const getProducts = async (): Promise<void> => {
      await dispatch(getFilteredProducts({}));
      await dispatch(getAllFilteredProductsWithoutLimit({}));
    };

    void getProducts();
  }, [filterCategory]);

  useEffect(() => {
    const brandsArr = extractAllBrands(filteredAllProducts);
    setBrands(brandsArr);
  }, [filteredAllProducts]);

  useEffect(() => {
    const getProducts = async (): Promise<void> => {
      await dispatch(getFilteredProducts({}));
    };

    void getProducts();
  }, [filterPaginationPage, min, max]);

  return (
    <div className="flex justify-between ">
      <div>
        <SideBar className="flex-none w-72" />
        <div className={`${styles.filterPanelWrapper} text-white`}>
          <FilterPanelContainer filteredBrands={brands} />
        </div>
      </div>
      <div className="flex flex-wrap justify-between flex-1 gap-2 px-5 mb-8">
        <div className="flex-1">
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
