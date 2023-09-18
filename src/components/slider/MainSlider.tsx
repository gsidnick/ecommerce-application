import { ReactElement, useState } from 'react';
import Image from 'next/image';
import type { MouseEvent } from 'react';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

import { productsToSlide } from './data';
import styles from './slider.module.css';

import { ArrowProps } from './types';

const FIRST_SLIDE = 0;
const LAST_SLIDE_DIFFERENT_NUMBER = 1;

function Arrow({ disabled, left = false, onClick }: ArrowProps): ReactElement {
  const disabeld = disabled ? styles.arrowDisabled : '';
  return (
    <svg
      onClick={onClick}
      className={`${styles.arrow} ${
        left ? `${styles.arrowLeft}` : `${styles.arrowRight}`
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!left && <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />}
    </svg>
  );
}

function MainSlider(): ReactElement {
  // eslint-disable-next-line @typescript-eslint/no-magic-numbers
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      // add plugins here
    ]
  );

  const arrowHandlerLeft = (e: MouseEvent): void => {
    e.stopPropagation();
    instanceRef.current?.prev();
  };

  const arrowHandlerRight = (e: MouseEvent): void => {
    e.stopPropagation();
    instanceRef.current?.next();
  };

  return (
    <div className={styles.navigationWrapper}>
      <div
        ref={sliderRef}
        className="keen-slider w-full text-white"
        style={{ minHeight: '100px', width: '100%', position: 'relative' }}
      >
        {productsToSlide.map((product) => (
          <div className="keen-slider__slide w-full" key={product.id}>
            <Image
              src={product.imageSrc}
              alt={product.title}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        ))}
      </div>
      {loaded && instanceRef.current && (
        <>
          <Arrow
            left
            onClick={arrowHandlerLeft}
            disabled={currentSlide === FIRST_SLIDE}
          />

          <Arrow
            onClick={arrowHandlerRight}
            disabled={
              currentSlide ===
              instanceRef.current.track.details.slides.length -
                LAST_SLIDE_DIFFERENT_NUMBER
            }
            left={false}
          />
        </>
      )}
    </div>
  );
}

export default MainSlider;
