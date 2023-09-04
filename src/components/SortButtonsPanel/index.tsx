import { ReactElement } from 'react';
import { setSortByValue, getFilteredProducts } from '@/store/slices/filterSlice';
import { useAppDispatch } from '@/hooks/useAppDispatch';

import styles from './styles.module.css';

interface ISortButtonsPanel {
  productsCount: number;
}

const SortButtonsPanel = ({
  productsCount,
}: ISortButtonsPanel): ReactElement => {

  const dispatch = useAppDispatch();

  const handleChangeSelect = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    dispatch(setSortByValue(event.target.value));
    dispatch(getFilteredProducts({}));
  };

  return (
    <div className={styles.container}>
      <p className="text-white">{productsCount} products</p>
      <div className={styles.selectWrapper}>
        <select onChange={handleChangeSelect} className={styles.select}>
          <option value="price asc">Price: low to high</option>
          <option value="price desc">Price: high to low</option>
          <option value="name.en-US asc">Product name: A to Z</option>
          <option value="name.en-US desc">Product name: Z to A</option>
        </select>
      </div>
    </div>
  );
};

export default SortButtonsPanel;
