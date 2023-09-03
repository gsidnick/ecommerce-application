import { ReactElement, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import ReactPaginate from 'react-paginate';
import { ProductProjection } from '@commercetools/platform-sdk';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import {
  setFilterPaginationPage,
  selectFilterState,
  getFilteredProducts,
  setOffsetValue,
  setCardsLimitPerPage,
} from '@/store/slices/filterSlice';
import ProductCard from '@/components/ProductCard';
import {
  DEFAULT_VARIANT_PRICE,
  FRACTION_DIGITS_COUNT_DEFAULT,
} from './constants';

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
  const [pagesTotalCount, setPagesTotalCount] = useState(ZERO_INDEX);

  const { totalFilteredProducts, filterPaginationPage } =
    useAppSelector(selectFilterState);

  const dispatch = useAppDispatch();
  const router = useRouter();

  const handlePageChange = (selectedItem: { selected: number }): void => {
    console.log('event', selectedItem.selected);

    window.scrollTo(ZERO_INDEX, ZERO_INDEX);
    dispatch(setFilterPaginationPage(selectedItem.selected));
  };

  useEffect(() => {
    setPagesTotalCount(Math.ceil(totalFilteredProducts / itemsPerPage));
  }, [totalFilteredProducts]);

  useEffect(() => {
    dispatch(setOffsetValue(filterPaginationPage * itemsPerPage));
    dispatch(setCardsLimitPerPage(itemsPerPage));
    dispatch(getFilteredProducts());
  }, [filterPaginationPage]);

  if (router.isFallback) {
    return <div className="text-white">Loading...</div>;
  }

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
                  fractionDigits={
                    masterVariant.prices?.length
                      ? masterVariant.prices[ZERO_INDEX].value.fractionDigits
                      : FRACTION_DIGITS_COUNT_DEFAULT
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
        pageCount={pagesTotalCount}
        renderOnZeroPageCount={null}
        pageRangeDisplayed={5}
        containerClassName={styles.paginateContainer}
        activeLinkClassName={styles.activeLinkClassName}
      />
    </div>
  );
};

export default FilteredProductContainer;
