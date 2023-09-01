import { ReactElement, useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { setFilterPaginationPage } from '@/store/slices/filterSlice';
import ProductCard from '@/components/ProductCard';
import { IProduct } from '../../pages/products/typesProduct';

import styles from './styles.module.css';

interface IFilteredProductContainer {
  filteredProducts: IProduct[];
  itemsPerPage: number;
}
const ZERO_INDEX = 0;

const FilteredProductContainer = (
  props: IFilteredProductContainer
): ReactElement => {
  const { filteredProducts, itemsPerPage } = props;
  // const [itemOffset, setItemOffset] = useState(ZERO_INDEX);
  const [pageCount, setPageCount] = useState(ZERO_INDEX);

  const dispatch = useAppDispatch();

  const filterPaginationPage = useAppSelector(
    (state) => state.filter.filterPaginationPage
  );

  const handlePageChange = (selectedItem: { selected: number }): void => {
    console.log('event', selectedItem.selected);

    window.scrollTo(ZERO_INDEX, ZERO_INDEX);
    // const newOffset = (selectedItem.selected * itemsPerPage) % filteredProducts.length;
    // setItemOffset(newOffset);
    dispatch(setFilterPaginationPage(selectedItem.selected));
  };

  useEffect(() => {
    setPageCount(Math.ceil(filteredProducts.length / itemsPerPage));
  }, []);

  return (
    <div>
      <div
        key={filteredProducts[ZERO_INDEX].id}
        className={`${styles.gridItemContainer} grid grid-cols-5 gap-4`}
      >
        {filteredProducts.length &&
          filteredProducts.map((product) => {
            const { current } = product.masterData;

            return (
              <div key={product.id} className={styles.gridItemContainer}>
                <ProductCard
                  key={product.id}
                  id={product.id}
                  img={current.masterVariant.images[ZERO_INDEX].url}
                  name={current.name['en-US']}
                  model={current.name['en-US']}
                  description={
                    current.description ? current.description['en-US'] : ''
                  }
                  price={
                    current.masterVariant.prices[ZERO_INDEX].discounted?.value
                      .centAmount
                  }
                  oldPrice={
                    current.masterVariant.prices[ZERO_INDEX].value.centAmount
                  }
                  currency={
                    current.masterVariant.prices[ZERO_INDEX].discounted?.value
                      .currencyCode
                  }
                  attributes={current.masterVariant.attributes}
                  variants={current.variants}
                />
              </div>
            );
          })}
      </div>
      {filteredProducts.length === ZERO_INDEX && (
        <h1 className={styles.noItems}>No items</h1>
      )}
      <ReactPaginate
        forcePage={filterPaginationPage}
        breakLabel="..."
        nextLabel="›"
        previousLabel="‹"
        onPageChange={handlePageChange}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        pageRangeDisplayed={5}
        containerClassName={styles.paginateContainer}
        activeLinkClassName={styles.activeLinkClassName}
      />
    </div>
  );
};

export default FilteredProductContainer;
