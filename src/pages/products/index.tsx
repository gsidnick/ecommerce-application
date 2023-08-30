import { ReactElement, useEffect } from 'react';
import FilterPanelContainer from '@/components/FilterPanelContainer';
import FilteredProductContainer from '@/components/FilteredProductContainer';
// import { useAppDispatch } from '@/hooks/useAppDispatch';
// import { useAppSelector } from '@/hooks/useAppSelector';
// import { setStateFilteredProducts } from '@/store/slices/filterSlice';
import styles from './styles.module.css';

const Products = (): ReactElement => {
  // const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(setStateFilteredProducts(data.body.results));
  }, []);

  return (
    <section>
      <div className={styles.container}>
        <div className="flex">
          <div className={`${styles.filterPanelWrapper} bg-amber-200`}>
            <FilterPanelContainer />
          </div>
          <div className="flex-1">
            <div className="bg-fuchsia-200">Sort buttons</div>
            <FilteredProductContainer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
