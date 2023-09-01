import { ReactElement } from 'react';

import styles from './styles.module.css';

interface ISortButtonsPanel {
  productsCount: number;
}

const SortButtonsPanel = ({
  productsCount,
}: ISortButtonsPanel): ReactElement => {
  const handleChangeSelect = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    console.log('event', event.target.value);
  };

  return (
    <div className={styles.container}>
      <p className="text-white">{productsCount} products</p>
      <div className={styles.selectWrapper}>
        <select onChange={handleChangeSelect} className={styles.select}>
          <option value="desc">Price: low to high</option>
          <option value="asc">Price: high to low</option>
          <option value="a-z">Product name: A to Z</option>
          <option value="z-a">Product name: Z to A</option>
        </select>
      </div>
    </div>
  );
};

export default SortButtonsPanel;
