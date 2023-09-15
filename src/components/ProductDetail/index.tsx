import React, { ReactElement, MouseEvent } from 'react';
import { useRouter } from 'next/router';
import { unwrapResult } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import styles from './styles.module.css';
import Breadcrumbs from '@/components/Breadcrumbs';
import {
  selectCartState,
  addProductToCart,
  removeProductLinesFromCart,
} from '@/store/slices/cartSlice';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useAppDispatch } from '@/hooks/useAppDispatch';

const FRACTION = 2;
const ADD_TO_CART_DEFAULT_QUANTITY = 1;
const KEY_PRODUCT_INDEX = 0;
const KEY_VARIANT_INDEX = 1;
const DEFAULT_VARIANT_ID = 1;

interface ProductDetailProps {
  details: {
    name: string;
    description: string;
    price: number;
    discount: number;
    id: string;
  };
}
const ProductDetail = ({ details }: ProductDetailProps): ReactElement => {
  const { name, description, price, discount, id } = details;

  const dispatch = useAppDispatch();

  const { userCartProducts } = useAppSelector(selectCartState);

  const router = useRouter();
  const { key = [] } = router.query;

  const handleAddToCart = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    e.preventDefault();

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    dispatch(
      addProductToCart({
        productId: id,
        quantity: ADD_TO_CART_DEFAULT_QUANTITY,
        variantId: Number(key[KEY_VARIANT_INDEX]) || DEFAULT_VARIANT_ID,
      })
    )
      .then(unwrapResult)
      .then(() => {
        toast.success('Product added to cart');
      })
      .catch(() => {
        toast.error('Error adding product to cart');
      });
  };

  const handleRemoveFromCart = (e: MouseEvent<HTMLButtonElement>): void => {
    console.log('remove from cart');
    e.stopPropagation();
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
    dispatch(removeProductLinesFromCart({ productId: id }))
      .then(unwrapResult)
      .then(() => {
        toast.info('Product deleted from cart');
      })
      .catch(() => {
        toast.error('Error deleting product from cart');
      });
  };

  const isInCart = userCartProducts.some(
    (item) =>
      item.productKey === key[KEY_PRODUCT_INDEX] &&
      item.variant.id === Number(key[KEY_VARIANT_INDEX])
  );

  return (
    <div className="pl-8 pr-8">
      <Breadcrumbs className="mb-4" />
      <h1 className="mb-4 text-3xl">{name}</h1>
      <p>{description}</p>
      <div className={styles.priceWrapper}>
        <span className={styles.currentPrice}>
          USD {discount.toFixed(FRACTION)}
        </span>
        <span className={styles.oldPrice}>USD {price.toFixed(FRACTION)}</span>
      </div>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={handleAddToCart}
          className={`flex w-1/3 items-center justify-center rounded-md ${
            isInCart
              ? 'bg-lime-500 hover:bg-lime-600'
              : 'bg-blue-500 hover:bg-blue-600'
          } py-2 text-white  disabled:cursor-not-allowed disabled:opacity-50 md:w-1/3`}
          disabled={isInCart}
        >
          {isInCart ? 'In Cart' : 'To Cart'}
        </button>
        {isInCart && (
          <button
            type="button"
            className="flex w-1/3 items-center justify-center rounded-md bg-red-500 py-2 text-white hover:bg-red-600  disabled:cursor-not-allowed disabled:opacity-50 md:w-1/3"
            onClick={handleRemoveFromCart}
          >
            Delete from cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
