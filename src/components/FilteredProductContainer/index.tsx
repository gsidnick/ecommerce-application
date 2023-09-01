import { ReactElement, useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { ProductProjection } from '@commercetools/platform-sdk';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { setFilterPaginationPage } from '@/store/slices/filterSlice';
import ProductCard from '@/components/ProductCard';
import { DEFAULT_VARIANT_PRICE } from './constants';

import styles from './styles.module.css';

interface IFilteredProductContainer {
  filteredProducts: ProductProjection[];
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
        // key={filteredProducts[ZERO_INDEX].id}
        className={`${styles.gridItemContainer} grid grid-cols-5 gap-4`}
      >
        {filteredProducts.length &&
          filteredProducts.map((product) => {
            const { id, name, description, masterVariant, variants } = product;

            return (
              <div key={id} className={styles.gridItemContainer}>
                <ProductCard
                  id={id}
                  img={
                    masterVariant.images?.length
                      ? masterVariant.images[ZERO_INDEX].url
                      : ''
                  }
                  name={name['en-US']}
                  model={name['en-US']}
                  description={description ? description['en-US'] : ''}
                  price={
                    masterVariant.prices?.length
                      ? masterVariant.prices[ZERO_INDEX].discounted?.value
                          .centAmount
                      : DEFAULT_VARIANT_PRICE
                  }
                  oldPrice={
                    masterVariant.prices?.length
                      ? masterVariant.prices[ZERO_INDEX].value.centAmount
                      : DEFAULT_VARIANT_PRICE
                  }
                  currency={
                    masterVariant.prices?.length
                      ? masterVariant.prices[ZERO_INDEX].discounted?.value
                          .currencyCode
                      : 'USD'
                  }
                  attributes={masterVariant.attributes}
                  variants={variants}
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
