import React, { ReactElement, memo, useEffect, useState } from 'react';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import FilterBrandElement from './FilterBrandElement';

import {
  selectFilterState,
  updateFilterBrands,
  getFilteredProducts,
} from '@/store/slices/filterSlice';

import styles from './styles.module.css';

interface IFilterCreatorBrand {
  brandsFiltered: string[];
}

const FilterCreatorBrand = (props: IFilterCreatorBrand): ReactElement => {
  const { brandsFiltered } = props;

  const dispatch = useAppDispatch();
  const { filterByBrand, filterCategory } = useAppSelector(selectFilterState);
  const [activeBrands, setActiveBrands] = useState<string[]>(brandsFiltered);

  const toggleBrandToRedux = (brand: string): void => {
    dispatch(updateFilterBrands(brand));

    const getProducts = async (): Promise<void> => {
      await dispatch(getFilteredProducts({}));
    };

    void getProducts();
  };

  useEffect(() => {
    const getProducts = async (): Promise<void> => {
      await dispatch(getFilteredProducts({}));
    };

    void getProducts();
  }, [filterByBrand]);

  useEffect(() => {
    setActiveBrands(brandsFiltered);
  }, [filterCategory]);

  return (
    <ul className={styles.brandsContainer}>
      {activeBrands?.map((brand) => (
        <FilterBrandElement
          brand={brand}
          checked={filterByBrand.includes(brand)}
          onChange={(): void => toggleBrandToRedux(brand)}
          key={`key_${brand}`}
        />
      ))}
    </ul>
  );
};

export default memo(FilterCreatorBrand);
