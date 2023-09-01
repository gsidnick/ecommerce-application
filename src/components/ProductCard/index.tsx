import { FC, useState, MouseEvent } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  PRODUCT_DESCRIPTION_SLICE_FROM,
  PRODUCT_DESCRIPTION_SLICE_TO,
} from '@/constants';
import { Variant, Attribute } from '../../pages/products/typesProduct';
import { colors, Color } from '../../assets/colors/colors';
import {
  INITIAL_VARIANT_ID,
  DEFAULT_VARIANT_PRICE,
  FIRST_IMAGE_INDEX,
  PRICE_ARRAY_DEFAULT_LENGTH,
} from './constants';

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
  attributes: Attribute[];
  variants: Variant[];
}

const ProductCard: FC<ProductCardProps> = (props) => {
  const {
    id,
    img,
    name,
    model,
    description,
    price,
    oldPrice,
    currency,
    attributes,
    variants,
  } = props;

  const [activeVariantId, setActiveVariantId] =
    useState<number>(INITIAL_VARIANT_ID);

  const briefDescription = `${description
    .slice(PRODUCT_DESCRIPTION_SLICE_FROM, PRODUCT_DESCRIPTION_SLICE_TO)
    .trim()}...`;

  const getAvailableColors = (): {
    variantId: number;
    color: string | undefined;
  }[] => {
    const availableColors: { variantId: number; color: string | undefined }[] =
      [];

    const mainColorName = attributes.find(
      (attribute: Attribute) => attribute.name === 'finish'
    )?.value.key;
    const mainColor: string | undefined = colors.find(
      (color: Color) => color.name === mainColorName
    )?.hex;
    availableColors.push({ variantId: 1, color: mainColor });

    variants.forEach((variant) => {
      const colorProps =
        variant.attributes.find(
          (attribute: Attribute) => attribute.name === 'finish'
        )?.value.key ?? '';
      const colorHex: string =
        colors.find((color: Color) => color.name === colorProps)?.hex ?? '';

      if (!availableColors.some((color) => color.color === colorHex)) {
        availableColors.push({ color: colorHex, variantId: variant.id });
      }
    });

    return availableColors;
  };

  const handleChangeActiveVariant = (
    e: MouseEvent<HTMLDivElement>,
    variantId: number
  ): void => {
    e.stopPropagation();
    e.preventDefault();
    setActiveVariantId(variantId);
  };

  const getActiveVariantImage = (): string => {
    if (activeVariantId === INITIAL_VARIANT_ID) {
      return img;
    }
    const activeVariant = variants.find(
      (variant) => variant.id === activeVariantId
    );
    const activeVariantImage = activeVariant?.images[FIRST_IMAGE_INDEX].url;

    return activeVariantImage ?? '';
  };

  const getActiveVariantDiscountPrice = (): number => {
    if (activeVariantId === INITIAL_VARIANT_ID) {
      return price;
    }
    const activeProductVariant = variants.find(
      (variant) => variant.id === activeVariantId
    );
    const activeVariantDiscountPrice =
      activeProductVariant?.prices[PRICE_ARRAY_DEFAULT_LENGTH].discounted.value.centAmount;

    return activeVariantDiscountPrice ?? DEFAULT_VARIANT_PRICE;
  };

  const getActiveVariantPrice = (): number => {
    if (activeVariantId === INITIAL_VARIANT_ID) {
      return oldPrice;
    }
    const activeProductVariant = variants.find(
      (variant) => variant.id === activeVariantId
    );
    const activeVariantOldPrice =
      activeProductVariant?.prices[PRICE_ARRAY_DEFAULT_LENGTH].value.centAmount;

    return activeVariantOldPrice ?? DEFAULT_VARIANT_PRICE;
  };

  return (
    <Link href={`/product/${id}`}>
      <div id={id} className={styles.cardWrapper}>
        <div className={`${styles.container} text-white`}>
          <Image
            src={getActiveVariantImage()}
            alt={name}
            className={styles.image}
            width={220}
            height={500}
          />
          <div className={`${styles.infoWrapper}`}>
            <div className="flex">
              {getAvailableColors().map((color) => (
                <div
                  key={color.color}
                  className={`${styles.colorVariantElem}`}
                  style={{ backgroundColor: color.color }}
                  onClick={(e): void =>
                    handleChangeActiveVariant(e, color.variantId)
                  }
                  role="button"
                  tabIndex={0}
                  aria-hidden="true"
                  data-active={color.variantId === activeVariantId}
                />
              ))}
            </div>
            <p className={styles.title}>{name}</p>
            <p className={styles.modelName}>{model}</p>
            <p className={styles.description}>{briefDescription}</p>
            <div className="flex justify-between">
              <div>
                <p className={`${styles.oldPciceWrapper} text-sm line-through`}>
                  {currency} {getActiveVariantPrice()}
                </p>
                <p className={`${styles.pciceWrapper} text-lg font-bold`}>
                  {currency} {getActiveVariantDiscountPrice()}
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
