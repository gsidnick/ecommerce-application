import React, {
  MouseEvent,
  MutableRefObject,
  ReactElement,
  useState,
} from 'react';
import {
  KeenSliderInstance,
  KeenSliderPlugin,
  useKeenSlider,
} from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import styles from './styles.module.css';
import { ArrowProps } from '@/components/slider/types';

interface ProductSliderProps {
  images: string[];
}

const FIRST_SLIDE = 0;
const INITIAL_ZERO = 0;
const ONE_POSITION = 1;

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

function ThumbnailPlugin(
  mainRef: MutableRefObject<KeenSliderInstance | null>
): KeenSliderPlugin {
  return (slider) => {
    function removeActive(): void {
      slider.slides.forEach((slide) => {
        slide.classList.remove('active');
      });
    }
    function addActive(idx: number): void {
      slider.slides[idx].classList.add('active');
    }

    function addClickEvents(): void {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener('click', () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx);
        });
      });
    }

    slider.on('created', () => {
      if (!mainRef.current) return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on('animationStarted', (main) => {
        removeActive();
        const next = main.animator.targetIdx ?? FIRST_SLIDE;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}

const ProductSlider = ({ images }: ProductSliderProps): ReactElement => {
  const [currentSlide, setCurrentSlide] = useState<number>(INITIAL_ZERO);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const [thumbnailRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
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
    <div className={styles.slider}>
      <div ref={sliderRef} className="keen-slider">
        {images.map((image) => (
          <div className={`keen-slider__slide ${styles.slide}`} key={image}>
            <picture>
              <img
                className={styles.image}
                src={`${image}?w=600&h=600`}
                alt="product"
              />
            </picture>
          </div>
        ))}
      </div>

      <div className={styles.navigationWrapper}>
        <div ref={thumbnailRef} className="keen-slider thumbnail">
          {images.map((image) => (
            <div className={`keen-slider__slide ${styles.slide}`} key={image}>
              <picture>
                <img src={`${image}?w=100&h=100`} alt="thumb" />
              </picture>
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
              left={false}
              onClick={arrowHandlerRight}
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - ONE_POSITION
              }
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ProductSlider;
