import React, { ReactElement, memo, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import styles from './styles.module.css';

import { IFilteredBrands } from '../FilterPanelContainer/data';
// import {
//   filterBrand,
// } from '../../store/actionCreators/filterAC';

interface IFilterCreatorBrand {
  brandsFiltered: IFilteredBrands;
}

const FilterCreatorBrand = (props: IFilterCreatorBrand): ReactElement => {
  const { brandsFiltered } = props;
  const [filterByBrand, setFilterByBrand] = useState<string[]>(['Adidas']);
  //   const dispatch = useDispatch();
  //   const filterByBrand = useSelector((state) => state.filter.filterByBrand);
  const toggleBrandToRedux = (brand: string): void => {
    if (!filterByBrand.includes(brand)) {
      setFilterByBrand([...filterByBrand, brand]);
    } else {
      setFilterByBrand(filterByBrand.filter((item) => item !== brand));
    }
    //   const selectedBrands = [...filterByBrand];
    //   if (!selectedBrands.includes(brand)) {
    //     selectedBrands.push(brand);
    //   } else {
    //     const index = selectedBrands.findIndex((item) => item === brand);
    //     selectedBrands.splice(index, 1);
    //   }
    //   dispatch(filterBrand(selectedBrands));
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
