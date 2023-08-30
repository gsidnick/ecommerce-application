import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import type { StaticImageData } from 'next/image';
import {
  PRODUCT_DESCRIPTION_SLICE_FROM,
  PRODUCT_DESCRIPTION_SLICE_TO,
} from '@/constants';

import styles from './styles.module.css';

interface ProductCardProps {
  id: string;
  img: string;
  name: string;
  model: string;
  description: string;
  price: number;
  oldPrice: number;
  currency: string;
}

const ProductCard: FC<ProductCardProps> = (props) => {
  const { id, img, name, model, description, price, oldPrice, currency } =
    props;

  const briefDescription = `${description
    .slice(PRODUCT_DESCRIPTION_SLICE_FROM, PRODUCT_DESCRIPTION_SLICE_TO)
    .trim()}...`;

  return (
    <Link href={`/product/${id}`}>
      <div id={id} className={styles.cardWrapper}>
        <div className={`${styles.container} text-white`}>
          <Image
            src={img}
            alt={name}
            className={styles.image}
            width={220}
            height={500}
          />
          <div className={`${styles.infoWrapper}`}>
            <p className={styles.title}>{name}</p>
            <p className={styles.modelName}>{model}</p>
            <p className={styles.description}>{briefDescription}</p>
            <div className="flex justify-between">
              <div>
                <p className={`${styles.oldPciceWrapper} text-sm line-through`}>
                  {currency} {oldPrice}
                </p>
                <p className={`${styles.pciceWrapper} text-lg font-bold`}>
                  {currency} {price}
                </p>
              </div>
              <div
                role="button"
                className={`${styles.button} rounded-md bg-slate-500 text-white`}
              >
                Add to cart
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

// ProductCard.defaultProps = {
//   id: '1',
//   img: '/images/placeholder.png',
//   name: 'Product name',
//   model: 'Product model',
//   description: 'Product description',
//   price: '100',
//   oldPrice: '200',
//   currency: 'USD',
// };

export default ProductCard;
