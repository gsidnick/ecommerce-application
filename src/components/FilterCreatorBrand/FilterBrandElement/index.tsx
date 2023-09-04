import React, { ReactElement } from 'react';

import styles from './styles.module.css';

interface IFilterBrandElement {
  brand: string;
  checked: boolean;
  onChange: () => void;
}

const FilterBrandElement = ({
  brand,
  checked,
  onChange,
}: IFilterBrandElement): ReactElement => (
  <li className={styles.brandElement} key={`key_${brand}`}>
    <input
      type="checkbox"
      className={styles.brandsCheckbox}
      id={`brand_${brand}`}
      name={`brand_${brand}`}
      checked={checked}
      onChange={onChange}
    />
    <label htmlFor={`brand_${brand}`} className={styles.label}>{brand}</label>
  </li>
);

export default FilterBrandElement;
