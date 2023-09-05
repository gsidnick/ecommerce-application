import React, { useState, ReactElement } from 'react';
// import Slider from 'rc-slider';
// import { useDebouncedCallback } from 'use-debounce';
// import { ProductProjection } from '@commercetools/platform-sdk';
import { useAppDispatch } from '@/hooks/useAppDispatch';
// import { useAppSelector } from '@/hooks/useAppSelector';
import {
  setMinSliderValue,
  setMaxSliderValue,
} from '@/store/slices/filterSlice';
// import { extractAllPrices } from '../../helpers/productsHelpers';

import 'rc-slider/assets/index.css';
import styles from './styles.module.css';

// interface IFilterPriceSlider {
//   productsItems: ProductProjection[];
// }

// const DEBOUNCE_TIME = 200;
// const INDEX_BEGIN = 0;
// const INDEX_END = 1;

// const FilterPriceSlider = ({
//   productsItems,
// }: IFilterPriceSlider): ReactElement => {
const FilterPriceSlider = (): ReactElement => {
  const dispatch = useAppDispatch();

  const [minPrice, setMinPrice] = useState<string>('');
  const [maxPrice, setMaxPrice] = useState<string>('');

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
    }
    if (name === 'maxPrice') {
      setMaxPrice(value);
    }
  };

  const handleSubmit = (): void => {
    dispatch(setMinSliderValue(Number(minPrice)));
    dispatch(setMaxSliderValue(Number(maxPrice)));
  };

  return (
    <div className={styles.priceFilterWrapper}>
      <p className={styles.priceTitle}>Price</p>
      <div
        className={`${styles.inputWrapper} text-white-200 flex h-16 w-36 items-center justify-center gap-2`}
      >
        <input
          type="text"
          name="minPrice"
          value={minPrice}
          style={{ width: '100px' }}
          onChange={handleChangePrice}
          className={`${styles.inputText} text-black`}
        />
        <span>-</span>
        <input
          type="text"
          name="maxPrice"
          value={maxPrice}
          style={{ width: '100px' }}
          onChange={handleChangePrice}
          className={`${styles.inputText} text-black`}
        />
        <button type="button" onClick={handleSubmit} className={styles.submitBtn}>
          OK
        </button>
      </div>
      {/* <div className="text-white-200 flex h-16 items-center justify-around text-xl font-bold">
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
