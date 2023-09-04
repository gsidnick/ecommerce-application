import { ReactElement, useState, useEffect } from 'react';
import { ProductProjection } from '@commercetools/platform-sdk';
import FilterCreatorBrand from '@/components/FilterCreatorBrand';
import FilterPriceSlider from '@/components/FilterPriceSlider';

import styles from './styles.module.css';

interface IFilterPanelContainer {
  filteredProducts: ProductProjection[];
  filteredBrands: string[];
}
const FilterPanelContainer = ({
  filteredProducts,
  filteredBrands,
}: IFilterPanelContainer): ReactElement => {
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
        {filterPrice && <FilterPriceSlider productsItems={filteredProducts} />}
      </div>
    </div>
  );
};

export default FilterPanelContainer;
