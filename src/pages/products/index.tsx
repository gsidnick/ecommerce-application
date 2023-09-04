import { ReactElement, useEffect } from 'react';
import FilterPanelContainer from '@/components/FilterPanelContainer';
import SortButtonsPanel from '@/components/SortButtonsPanel';
import FilteredProductContainer from '@/components/FilteredProductContainer';
import { useAppDispatch } from '@/hooks/useAppDispatch';
// import { useAppSelector } from '@/hooks/useAppSelector';
import { getFilteredProducts } from '@/store/slices/filterSlice';
import styles from './styles.module.css';

import { data } from './dataProducts';

const Products = (): ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // console.log('getFilteredProducts working');

    dispatch(getFilteredProducts({}));
    // dispatch(setStateFilteredProducts(data.body.results));
  }, []);

  return (
    <section>
      <div className={styles.container}>
        <div className="flex">
          <div className={`${styles.filterPanelWrapper} text-white`}>
            <FilterPanelContainer />
          </div>
          <div className="flex-1">
            <SortButtonsPanel productsCount={data.total} />
            <FilteredProductContainer
              filteredProducts={data.results}
              itemsPerPage={15}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
