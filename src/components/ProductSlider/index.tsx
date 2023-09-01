import React, { ReactElement } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import styles from './styles.module.css';

interface ProductSliderProps {
  images: string[];
}

const ProductSlider = ({ images }: ProductSliderProps): ReactElement => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
  });
  return (
    <div className={styles.slider}>
      <div ref={sliderRef} className="keen-slider">
        {images.map((image) => (
          <div className={`keen-slider__slide ${styles.slide}`}>
            <img
              className={styles.image}
              src={`${image}?w=600&h=600`}
              alt="asdfad"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
