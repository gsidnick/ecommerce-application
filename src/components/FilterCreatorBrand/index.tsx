import React, { ReactElement, memo } from 'react';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';

import { IFilteredBrands } from '../FilterPanelContainer/data';
import {
  selectFilterState,
  updateFilterBrands,
} from '@/store/slices/filterSlice';

import styles from './styles.module.css';

interface IFilterCreatorBrand {
  brandsFiltered: IFilteredBrands;
}

const FilterCreatorBrand = (props: IFilterCreatorBrand): ReactElement => {
  const { brandsFiltered } = props;

  const dispatch = useAppDispatch();
  const { filterByBrand } = useAppSelector(selectFilterState);

  const toggleBrandToRedux = (brand: string): void => {
    const newFilterByBrand = [...filterByBrand];
    if (!newFilterByBrand.includes(brand)) {
      dispatch(updateFilterBrands([...newFilterByBrand, brand]));
    } else {
      dispatch(
        updateFilterBrands(newFilterByBrand.filter((item) => item !== brand))
      );
    }
  };

  return (
    <ul className={styles.brandsContainer}>
      {brandsFiltered?.map((brand) => (
        <li key={brand} className={styles.brandElement}>
          <input
            type="checkbox"
            className={styles.brandsCheckbox}
            id={`brand_${brand}`}
            name={`brand_${brand}`}
            checked={filterByBrand.includes(brand)}
            onChange={(): void => {
              toggleBrandToRedux(brand);
            }}
          />
          <label htmlFor={`brand_${brand}`}>{brand}</label>
        </li>
      ))}
    </ul>
  );
};

export default memo(FilterCreatorBrand);
