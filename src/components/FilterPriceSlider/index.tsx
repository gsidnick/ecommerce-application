import React, { useState, ReactElement, useEffect, ChangeEvent } from 'react';
import Slider from 'rc-slider';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import {
  selectFilterState,
  setMinSliderValue,
  setMaxSliderValue,
} from '@/store/slices/filterSlice';
import { extractAllPrices } from '../../helpers/productsHelpers';

import 'rc-slider/assets/index.css';
import styles from './styles.module.scss';

const DEGREE_OF_TEN = 10;
const DIGITS_AFTER_COMMA = 2;
const FIRST_INDEX = 0;
const DIFFERENT_COUNT_LAST_INDEX = 1;
const DEFAULT_PRICE = 0;

const FilterPriceSlider = (): ReactElement => {
  const dispatch = useAppDispatch();

  const [minPrice, setMinPrice] = useState<number>(DEFAULT_PRICE);
  const [maxPrice, setMaxPrice] = useState<number>(DEFAULT_PRICE);
  const [minPriceValue, setMinPriceValue] = useState<number>(DEFAULT_PRICE);
  const [maxPriceValue, setMaxPriceValue] = useState<number>(DEFAULT_PRICE);

  const { filterCategory, filteredAllProducts, filterByBrand } =
    useAppSelector(selectFilterState);

  const handleChangePriceBySlider = (value: number | number[]): void => {
    const [minLocal, maxLocal] = value as number[];
    setMinPriceValue(minLocal);
    setMaxPriceValue(maxLocal);
  };

  const handleChangePriceByInput = (e: ChangeEvent<HTMLInputElement>): void => {
    const regex = /^[0-9]*|^$$/
    if (!regex.test(e.target.value)) {
      return;
    }
    if (e.target.name === 'minPriceValue') {
      setMinPriceValue(
        Number(e.target.value) * DEGREE_OF_TEN ** DIGITS_AFTER_COMMA
      );
    }
    if (e.target.name === 'maxPriceValue') {
      setMaxPriceValue(
        Number(e.target.value) * DEGREE_OF_TEN ** DIGITS_AFTER_COMMA
      );
    }
  };

  useEffect(() => {
    const prices = extractAllPrices(filteredAllProducts);
    const min = prices[FIRST_INDEX];
    const max = prices[prices.length - DIFFERENT_COUNT_LAST_INDEX];
    setMinPriceValue(min);
    setMaxPriceValue(max);
    setMinPrice(min);
    setMaxPrice(max);
    dispatch(setMinSliderValue(min));
    dispatch(setMaxSliderValue(max));
  }, []);

  useEffect(() => {
    const prices = extractAllPrices(filteredAllProducts);
    const min = prices[FIRST_INDEX];
    const max = prices[prices.length - DIFFERENT_COUNT_LAST_INDEX];
    setMinPriceValue(min);
    setMaxPriceValue(max);
    setMinPrice(min);
    setMaxPrice(max);
  }, [filterCategory, filteredAllProducts, filterByBrand]);

  const handleSubmit = (): void => {
    dispatch(setMinSliderValue(minPriceValue));
    dispatch(setMaxSliderValue(maxPriceValue));
  };

  return (
    <div className={styles.priceFilterWrapper}>
      <p className={styles.priceTitle}>Price</p>
      <div
        className={`${styles.inputWrapper} text-white-200 items-left flex justify-center gap-2`}
      >
        <input
          type="text"
          name="minPriceValue"
          value={minPriceValue / DEGREE_OF_TEN ** DIGITS_AFTER_COMMA}
          onChange={(e): void => {
            handleChangePriceByInput(e);
          }}
          className={`${styles.inputText} w-[80px] text-black`}
        />
        <span>-</span>
        <input
          type="text"
          name="maxPriceValue"
          value={maxPriceValue / DEGREE_OF_TEN ** DIGITS_AFTER_COMMA}
          onChange={(e): void => {
            handleChangePriceByInput(e);
          }}
          className={`${styles.inputText}  w-[80px] text-black`}
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className={styles.submitBtn}
        >
          OK
        </button>
      </div>

      <div className={styles.sliderWrapper}>
        <Slider
          range
          value={[minPriceValue, maxPriceValue]}
          allowCross={false}
          min={Number(minPrice)}
          max={Number(maxPrice)}
          onChange={handleChangePriceBySlider}
          handleStyle={[
            { borderColor: '#4527a0', borderWidth: 4 },
            { borderColor: '#4527a0', borderWidth: 4 },
          ]}
          trackStyle={[{ backgroundColor: '#4527a0' }]}
          railStyle={{ backgroundColor: '#f1b8ff' }}
        />
      </div>
    </div>
  );
};

export default FilterPriceSlider;
