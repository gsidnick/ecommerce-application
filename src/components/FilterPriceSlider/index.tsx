import React, { useState, ReactElement, ReactNode, useEffect } from 'react';
// import Slider from 'rc-slider';
// import { useDebouncedCallback } from 'use-debounce';
// import { ProductProjection } from '@commercetools/platform-sdk';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import {
  selectFilterState,
  setMinSliderValue,
  setMaxSliderValue,
} from '@/store/slices/filterSlice';
// import { extractAllPrices } from '../../helpers/productsHelpers';
import { numberSchema } from '@/validation/schemas';

import 'rc-slider/assets/index.css';
import styles from './styles.module.scss';

// interface IFilterPriceSlider {
//   productsItems: ProductProjection[];
// }

// const DEBOUNCE_TIME = 200;
// const INDEX_BEGIN = 0;
// const INDEX_END = 1;

// const FilterPriceSlider = ({
//   productsItems,
// }: IFilterPriceSlider): ReactElement => {

const initialValues: { minPrice: string; maxPrice: string } = {
  minPrice: '',
  maxPrice: '',
};
const FilterPriceSlider = (): ReactElement => {
  const dispatch = useAppDispatch();

  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');

  const {
    priceSliderValues: { min, max },
    filteredProducts,
    filterCategory,
  } = useAppSelector(selectFilterState);

  // const { handleReset } = useFormikContext();

  // const minFilterPriceGlobal = useAppSelector(
  //   (state) => state.filter.priceSliderValues.min
  // );
  // const maxFilterPriceGlobal: number = useAppSelector(
  //   (state) => state.filter.priceSliderValues.max
  // );

  // const [priceValue, setPriceValue] = useState<number[]>([
  //   minFilterPriceGlobal,
  //   maxFilterPriceGlobal,
  // ]);

  // const priceArray = extractAllPrices(productsItems);

  // const reduxRequest = useDebouncedCallback(
  //   (value: [min: number, max: number]) => {
  //     const [min, max] = value;

  //     dispatch(setMinSliderValue(min));
  //     dispatch(setMaxSliderValue(max));
  //   },
  //   DEBOUNCE_TIME
  // );

  // const handleChangePrice = (value: number[]): void => {
  //   const [min, max] = value;
  //   setPriceValue([min, max]);
  //   reduxRequest([min, max]);
  // };

  // useEffect(() => {
  //   setPriceValue([
  //     priceArray[INDEX_BEGIN],
  //     priceArray[priceArray.length - INDEX_END],
  //   ]);
  //   reduxRequest([
  //     priceArray[INDEX_BEGIN],
  //     priceArray[priceArray.length - INDEX_END],
  //   ]);
  // }, []);

  const handleChangePrice = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    if (name === 'minPrice') {
      setMinPrice(value);
      // dispatch(setMinSliderValue(value));
    }
    if (name === 'maxPrice') {
      setMaxPrice(value);
      // dispatch(setMaxSliderValue(value));
    }
  };

  const handleSubmit = (values: {
    minPrice: string;
    maxPrice: string;
  }): void => {
    dispatch(setMinSliderValue(values.minPrice));
    dispatch(setMaxSliderValue(values.maxPrice));
  };

  const validationSchema = Yup.object({
    minPrice: numberSchema,
    maxPrice: numberSchema,
  });

  useEffect(() => {
    setMinPrice(min);
    setMaxPrice(max);
    // handleReset();
  }, [min, max, filteredProducts, filterCategory]);

  return (
    <div className={styles.priceFilterWrapper}>
      <p className={styles.priceTitle}>Price</p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({
          // values,
          // resetForm,
          handleChange,
          errors,
        }): ReactNode => (
          <Form>
            <div
              className={`${styles.inputWrapper} text-white-200 items-left flex justify-center gap-2`}
            >
              <input
                type="text"
                name="minPrice"
                value={minPrice}
                onChange={(e): void => {
                  handleChange(e);
                  handleChangePrice(e);
                }}
                className={`${styles.inputText} ${
                  errors.minPrice ? styles.inputError : ''
                } w-[60px] text-black`}
              />
              <span>-</span>
              <input
                type="text"
                name="maxPrice"
                value={maxPrice}
                onChange={(e): void => {
                  handleChange(e);
                  handleChangePrice(e);
                }}
                className={`${styles.inputText} ${
                  errors.maxPrice ? styles.inputError : ''
                } w-[60px] text-black`}
              />
              <button
                type="submit"
                // onClick={handleSubmit}
                className={styles.submitBtn}
              >
                OK
              </button>
            </div>
          </Form>
        )}
      </Formik>
      {/* <div className="flex items-center justify-around h-16 text-xl font-bold text-white-200">
        <p>{priceValue[INDEX_BEGIN]}</p>

        <span>-</span>
        <p>{priceValue[INDEX_END]}</p>
      </div> */}
      {/* <div className={styles.sliderWrapper}>
        {priceValue[INDEX_BEGIN] && priceValue[INDEX_END] && (
          <Slider
            range
            value={priceValue}
            allowCross={false}
            min={priceArray[INDEX_BEGIN]}
            max={priceArray[priceArray.length - INDEX_END]}
            onChange={(value): void => {
              handleChangePrice(value as number[]);
            }}
            handleStyle={[
              { borderColor: '#4527a0', borderWidth: 4 },
              { borderColor: '#4527a0', borderWidth: 4 },
            ]}
            trackStyle={[{ backgroundColor: '#4527a0' }]}
            railStyle={{ backgroundColor: '#f1b8ff' }}
          />
        )}
      </div> */}
    </div>
  );
};

export default FilterPriceSlider;
