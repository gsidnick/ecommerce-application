import { ReactElement, useState } from 'react';
import Image from 'next/image';
import type { MouseEvent } from 'react';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

import { productsToSlide } from './data';
import styles from './slider.module.css';

import { ArrowProps } from './types';

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
      // loop: true,
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
        style={{ height: '400px', position: 'relative' }}
      >
        {productsToSlide.map((product) => (
          <div className="keen-slider__slide">
            <Image
              src={product.imageSrc}
              alt={product.title}
              layout="fill"
              objectFit="contain"
            />
          </div>
        ))}
      </div>
      {loaded && instanceRef.current && (
        <>
          <Arrow
            left
            onClick={arrowHandlerLeft}
            // eslint-disable-next-line @typescript-eslint/no-magic-numbers
            disabled={currentSlide === 0}
          />

          <Arrow
            onClick={arrowHandlerRight}
            disabled={
              currentSlide ===
              // eslint-disable-next-line @typescript-eslint/no-magic-numbers
              instanceRef.current.track.details.slides.length - 1
            }
            left={false}
          />
        </>
      )}
    </div>
  );
}

export default MainSlider;
