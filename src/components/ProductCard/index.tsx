import { FC, useState, MouseEvent } from 'react';
import Link from 'next/link';
import { ProductVariant, Attribute } from '@commercetools/platform-sdk';
import {
  PRODUCT_DESCRIPTION_SLICE_FROM,
  PRODUCT_DESCRIPTION_SLICE_TO,
} from '@/constants';
import { colors, Color } from '../../assets/colors/colors';
import {
  MAIN_VARIANT_ID,
  DEFAULT_VARIANT_PRICE,
  FIRST_IMAGE_INDEX,
  PRICE_ARRAY_DEFAULT_LENGTH,
  DEFAULT_PRICE,
  FRACTION_DIGIT,
  FRACTION_DIGITS_COUNT_DEFAULT,
} from './constants';

import styles from './styles.module.css';

interface ProductCardProps {
  id: string;
  img: string;
  name: string;
  model: string;
  description: string;
  price: number | undefined;
  fractionDigits: number;
  oldPrice: number;
  currency: string | undefined;
  attributes: Attribute[] | undefined;
  variants: ProductVariant[];
}

const ProductCard: FC<ProductCardProps> = (props) => {
  const {
    id,
    img,
    name,
    model,
    description,
    price,
    fractionDigits,
    oldPrice,
    currency,
    attributes,
    variants,
  } = props;

  const [activeVariantId, setActiveVariantId] =
    useState<number>(MAIN_VARIANT_ID);

  const briefDescription = `${description
    .slice(PRODUCT_DESCRIPTION_SLICE_FROM, PRODUCT_DESCRIPTION_SLICE_TO)
    .trim()}...`;

  const getAvailableColors = (): {
    variantId: number;
    color: string | undefined;
  }[] => {
    const availableColors: { variantId: number; color: string | undefined }[] =
      [];

    const mainColorName: Attribute | undefined = attributes?.find(
      (attribute: Attribute) =>
        attribute.name === 'finish' || attribute.name === 'color'
    );
    const { key: keyColor } = (mainColorName?.value as {
      key: string | null;
      label: string | null;
    }) ?? { key: null, label: null };

    const mainColor: string | undefined = colors.find(
      (color: Color) => color.name === keyColor
    )?.hex;

    if (typeof mainColor === 'string')
      availableColors.push({ variantId: 1, color: mainColor });

    variants?.forEach((variant: ProductVariant): void => {
      const colorProps: Attribute | undefined = variant.attributes?.find(
        (attribute: Attribute) =>
          attribute.name === 'finish' || attribute.name === 'color'
      );
      const { key: keyColorProp } = (colorProps?.value as {
        key: string | null;
        label: string | null;
      }) ?? { key: null, label: null };
      const colorHex: string | null =
        colors.find((color: Color) => color.name === keyColorProp)?.hex ?? null;

      if (!availableColors.some((color) => color.color === colorHex)) {
        if (colorHex)
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
    if (activeVariantId === MAIN_VARIANT_ID) {
      console.log('activeVariantImage', img);
      return `${img}?fit=fill&w=220`;
    }
    const activeVariant = variants.find(
      (variant) => variant.id === activeVariantId
    );
    const activeVariantImage = activeVariant?.images?.length
      ? activeVariant?.images[FIRST_IMAGE_INDEX].url
      : '';

    return activeVariantImage;
  };

  const cutCentAmount = (
    priceToCut = DEFAULT_PRICE,
    fractionDigitsProp = FRACTION_DIGITS_COUNT_DEFAULT
  ): number | string => {
    const fractionNumber = FRACTION_DIGIT ** fractionDigitsProp;
    const result = (priceToCut / fractionNumber).toFixed(fractionDigits);

    return result;
  };

  const getActiveVariantDiscountPrice = (): number => {
    if (activeVariantId === MAIN_VARIANT_ID) {
      return Number(cutCentAmount(price ?? DEFAULT_PRICE, fractionDigits));
    }
    const activeProductVariant = variants.find(
      (variant) => variant.id === activeVariantId
    );
    const activeVariantDiscountPrice = activeProductVariant?.prices?.length
      ? cutCentAmount(
          activeProductVariant?.prices[PRICE_ARRAY_DEFAULT_LENGTH].discounted
            ?.value.centAmount,
          activeProductVariant?.prices[PRICE_ARRAY_DEFAULT_LENGTH].discounted
            ?.value.fractionDigits
        )
      : DEFAULT_VARIANT_PRICE;

    return Number(activeVariantDiscountPrice) ?? DEFAULT_VARIANT_PRICE;
  };

  const getActiveVariantPrice = (): number | string => {
    if (activeVariantId === MAIN_VARIANT_ID) {
      return cutCentAmount(oldPrice, FRACTION_DIGITS_COUNT_DEFAULT);
    }
    const activeProductVariant = variants.find(
      (variant) => variant.id === activeVariantId
    );
    const activeVariantOldPrice = activeProductVariant?.prices?.length
      ? cutCentAmount(
          activeProductVariant.prices[PRICE_ARRAY_DEFAULT_LENGTH].value
            .centAmount,
          activeProductVariant.prices[PRICE_ARRAY_DEFAULT_LENGTH].value
            .fractionDigits
        )
      : Number(DEFAULT_VARIANT_PRICE.toFixed(FRACTION_DIGITS_COUNT_DEFAULT));

    return activeVariantOldPrice;
  };

  return (
    <Link href={`/product/${id}`}>
      <div id={id} className={styles.cardWrapper}>
        <div className={`${styles.container} text-white`}>
          <div className={`${styles.imageWrapper} bg-white`}>
            {/* <Image
              src={getActiveVariantImage()}
              alt={name}
              // className={styles.image}
              // width={220}
              // height={500}
            /> */}
            <picture>
              <img src={getActiveVariantImage()} alt="sdfsdsf" className={styles.image}/>
            </picture>
          </div>
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

export default ProductCard;
