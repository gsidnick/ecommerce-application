import { ReactElement, useState, useEffect } from 'react';
import FilterCreatorBrand from '@/components/FilterCreatorBrand';
import FilterPriceSlider from '@/components/FilterPriceSlider';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { resetAllFilters } from '@/store/slices/filterSlice';

import styles from './styles.module.css';

interface IFilterPanelContainer {
  filteredBrands: string[];
}
const FilterPanelContainer = ({
  filteredBrands,
}: IFilterPanelContainer): ReactElement => {
  const [filterPrice, setFilterPrice] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setFilterPrice(true);
  }, []);

  const handleResetFilters = (): void => {
    dispatch(resetAllFilters());
  };

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
          <FilterPriceSlider /* productsItems={filteredProducts} */ />
        )}
      </div>
      <div className={styles.resetButtonWrapper}>
        <button
          onClick={handleResetFilters}
          type="button"
          className={styles.resetButton}
        >
          RESET
        </button>
      </div>
    </div>
  );
};

export default FilterPanelContainer;
