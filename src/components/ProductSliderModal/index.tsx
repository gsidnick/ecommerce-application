import React, { MouseEvent, ReactElement, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import { setModalState } from '@/store/slices/modalSlice';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { ArrowProps } from '@/components/slider/types';
import styles from './styles.module.css';

interface ProductSliderModalProps {
  images: string[];
  current: number;
}

const FIRST_SLIDE = 0;
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

const ProductSliderModal = ({
  images,
  current,
}: ProductSliderModalProps): ReactElement => {
  const dispatch = useAppDispatch();
  const [currentSlide, setCurrentSlide] = useState<number>(current);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: current,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const arrowHandlerLeft = (e: MouseEvent): void => {
    e.stopPropagation();
    instanceRef.current?.prev();
  };

  const arrowHandlerRight = (e: MouseEvent): void => {
    e.stopPropagation();
    instanceRef.current?.next();
  };
  const closeModalHandler = (e: MouseEvent): void => {
    e.preventDefault();
    dispatch(setModalState(false));
    const body = document.querySelector('body');
    body?.classList.remove('modal');
  };

  return (
    <div
      className={`fixed inset-x-0 bottom-0 left-0 right-0 top-0 flex flex-col bg-black bg-opacity-50 ${styles.center}`}
    >
      <button
        type="button"
        onClick={closeModalHandler}
        className={styles.closeButton}
      >
        X
      </button>
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

export default ProductSliderModal;
