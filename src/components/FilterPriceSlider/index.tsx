import React, { useState, useEffect, ReactElement } from 'react';
import Slider from 'rc-slider';
import { useDebouncedCallback } from 'use-debounce';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import {
  setMinSliderValue,
  setMaxSliderValue,
} from '@/store/slices/filterSlice';
import { extractAllPrices, IProduct } from '../../helpers/productsHelpers';

import 'rc-slider/assets/index.css';
import styles from './styles.module.css';

interface IFilterPriceSlider {
  productsItems: IProduct[];
}

const DEBOUNCE_TIME = 200;
const INDEX_BEGIN = 0;
const INDEX_END = 1;

const FilterPriceSlider = ({
  productsItems,
}: IFilterPriceSlider): ReactElement => {
  const dispatch = useAppDispatch();
  const minFilterPriceGlobal = useAppSelector(
    (state) => state.filter.priceSliderValues.min
  );
  const maxFilterPriceGlobal: number = useAppSelector(
    (state) => state.filter.priceSliderValues.max
  );

  const [priceValue, setPriceValue] = useState<number[]>([
    minFilterPriceGlobal,
    maxFilterPriceGlobal,
  ]);

  const priceArray = extractAllPrices(productsItems);

  const reduxRequest = useDebouncedCallback((value) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const min: number = value[INDEX_BEGIN] as number;
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const max: number = value[INDEX_END] as number;
    dispatch(setMinSliderValue(min));
    dispatch(setMaxSliderValue(max));
  }, DEBOUNCE_TIME);

  const handleChangePrice = (value: number[]): void => {
    const [min, max] = value;
    setPriceValue([min, max]);
    reduxRequest(value);
  };

  useEffect(() => {
    setPriceValue([
      priceArray[INDEX_BEGIN],
      priceArray[priceArray.length - INDEX_END],
    ]);
    reduxRequest([
      priceArray[INDEX_BEGIN],
      priceArray[priceArray.length - INDEX_END],
    ]);
  }, []);

  return (
    <div className={styles.priceFilterWrapper}>
      <div className="flex h-16 items-center justify-around text-xl font-bold text-gray-700">
        <p>{priceValue[INDEX_BEGIN]}</p>
        <p>-</p>
        <p>{priceValue[INDEX_END]}</p>
      </div>
      <div className={styles.sliderWrapper}>
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
      </div>
    </div>
  );
};

export default FilterPriceSlider;
