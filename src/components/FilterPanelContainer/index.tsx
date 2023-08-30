import { ReactElement, useState, useEffect } from 'react';
import FilterCreatorBrand from '@/components/FilterCreatorBrand';
import FilterPriceSlider from '@/components/FilterPriceSlider';

import styles from './styles.module.css';
import { filteredBrands } from './data';
import { data } from '../../pages/products/dataProducts';

const FilterPanelContainer = (): ReactElement => {
  const [filterPrice, setFilterPrice] = useState<boolean>(false);

  useEffect(() => {
    setFilterPrice(true);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.brandFilterWrapper}>
        <p className={styles.brandTitle}>Brands</p>
        {filteredBrands.length && (
          <FilterCreatorBrand brandsFiltered={filteredBrands} />
        )}
      </div>
      <div>
        {filterPrice && (
          <FilterPriceSlider productsItems={data.results} />
        )}
      </div>
    </div>
  );
};

export default FilterPanelContainer;
