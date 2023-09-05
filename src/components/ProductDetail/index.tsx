import React, { ReactElement } from 'react';
import styles from './styles.module.css';
import Breadcrumbs from '@/components/Breadcrumbs';

const FRACTION = 2;

interface ProductDetailProps {
  details: {
    name: string;
    description: string;
    brand: string;
    price: number;
    discount: number;
  };
}
const ProductDetail = ({ details }: ProductDetailProps): ReactElement => {
  const { name, description, price, discount, brand } = details;

  return (
    <div className="pl-8 pr-8">
      <Breadcrumbs className="mb-4" />
      <h1 className="mb-4 text-3xl">
        {brand} {name}
      </h1>
      <p>{description}</p>
      <div className={styles.priceWrapper}>
        <span className={styles.currentPrice}>
          USD {discount.toFixed(FRACTION)}
        </span>
        <span className={styles.oldPrice}>USD {price.toFixed(FRACTION)}</span>
      </div>
      <button
        type="button"
        className="flex w-full items-center justify-center rounded-md bg-blue-500 py-2 text-white hover:bg-blue-600 md:w-1/2"
      >
        To Cart
      </button>
    </div>
  );
};

export default ProductDetail;
