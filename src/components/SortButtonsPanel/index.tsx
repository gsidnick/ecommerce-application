import { ReactElement } from 'react';
import {
  selectFilterState,
  setSortByValue,
  getFilteredProducts,
} from '@/store/slices/filterSlice';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';

import styles from './styles.module.css';

interface ISortButtonsPanel {
  productsCount: number;
}

const FIRST_INDEX_OF_ARRAY = 0;

const SortButtonsPanel = ({
  productsCount,
}: ISortButtonsPanel): ReactElement => {
  const dispatch = useAppDispatch();
  const { sortBy } = useAppSelector(selectFilterState);

  const handleChangeSelect = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    dispatch(setSortByValue(event.target.value));

    const getProducts = (): void => {
      dispatch(getFilteredProducts({}));
    };

    getProducts();
  };

  return (
    <div className={styles.container}>
      <p className="text-white">{productsCount} products</p>
      <div className={styles.selectWrapper}>
        <select onChange={handleChangeSelect} className={styles.select}>
          <option value="price asc" selected={sortBy[FIRST_INDEX_OF_ARRAY] === 'price asc'}>
            Price: low to high
          </option>
          <option value="price desc" selected={sortBy[FIRST_INDEX_OF_ARRAY] === 'price desc'}>
            Price: high to low
          </option>
          <option
            value="name.en-US asc"
            selected={sortBy[FIRST_INDEX_OF_ARRAY] === 'name.en-US asc'}
          >
            Product name: A to Z
          </option>
          <option
            value="name.en-US desc"
            selected={sortBy[FIRST_INDEX_OF_ARRAY] === 'name.en-US desc'}
          >
            Product name: Z to A
          </option>
        </select>
      </div>
    </div>
  );
};

export default SortButtonsPanel;
