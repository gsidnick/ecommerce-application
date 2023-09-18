import React, { ReactElement, useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { resetAuthState, selectAuthState } from '@/store/slices/authSlice';
import { setStateBurgerMenu } from '@/store/slices/menuSlice';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import cart from '@/assets/images/cart-icon.png';
import { ERoute } from '../../../data/routes';
import styles from './styles.module.css';
import CustomerController from '@/api/controllers/CustomerController';
import {
  getCartProducts,
  setCartId,
  setCartProducts,
} from '../../../store/slices/cartSlice';

const ZERO_PRODUCTS = 0;

function ButtonsGroup(): ReactElement {
  const { authState } = useAppSelector(selectAuthState);
  const dispatch = useAppDispatch();

  const userCartProducts = useAppSelector(getCartProducts);

  const router = useRouter();

  const [cartProductsQty, setCartProductsQty] = useState(ZERO_PRODUCTS);

  const handleOpenBurgerMenu = (): void => {
    dispatch(setStateBurgerMenu(true));
    const body = document.querySelector('body');
    body?.classList.add('modal');
  };

  const handleRedirectToSignUp = (): void => {
    router.push(ERoute.signup).catch((error) => {
      console.log(error);
    });
  };

  useEffect(() => {
    setCartProductsQty(
      userCartProducts.reduce(
        (acc, value) => acc + value.quantity,
        ZERO_PRODUCTS
      )
    );
  }, [userCartProducts]);

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center">
        <button
          type="button"
          className="relative hidden rounded py-1 text-white60 transition-colors duration-300 hover:text-white md:block"
          onClick={(): void => {
            router.push(ERoute.cart).catch((error) => {
              toast.error(error as string);
            });
          }}
        >
          <Image src={cart} alt="cart" className="mr-8" />
          {userCartProducts.length > ZERO_PRODUCTS && (
            <span className="absolute left-2 top-0 ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-orange-main p-1 text-xs font-semibold text-black">
              {cartProductsQty}
            </span>
          )}
        </button>
        {authState && (
          <>
            <button
              type="button"
              className="hidden rounded border-2 border-solid px-3 py-1 text-white60 transition-colors duration-300 hover:text-white md:block"
              onClick={(): void => {
                router.push(ERoute.profile).catch((error) => {
                  toast.error(error as string);
                });
              }}
            >
              Profile
            </button>
            <button
              type="button"
              className="ml-2 hidden rounded border-2 border-solid px-3 py-1 text-white60 transition-colors duration-300 hover:text-white md:block"
              onClick={(): void => {
                void new CustomerController().logoutCustomer();
                dispatch(setCartProducts([]));
                dispatch(setCartId(''));
                dispatch(resetAuthState());
                toast.success('You have successfully logged out');
              }}
            >
              Log out
            </button>
          </>
        )}
        {!authState && (
          <>
            <button
              type="button"
              className="hidden rounded border-2 border-solid px-3 py-1 text-white60 transition-colors duration-300 hover:text-white md:block"
              onClick={(): void => {
                router.push(ERoute.login).catch((error) => {
                  toast.error(error as string);
                });
              }}
            >
              Log In
            </button>
            <button
              type="button"
              onClick={handleRedirectToSignUp}
              className="ml-2 hidden rounded border-2 border-solid px-3 py-1 text-white60 transition-colors duration-300 hover:text-white md:block"
            >
              Sign Up
            </button>
          </>
        )}
        <div
          className={styles.burgerButton}
          role="button"
          onClick={handleOpenBurgerMenu}
          tabIndex={0}
          aria-hidden="true"
        >
          <span className={styles.burgerSpan} />
        </div>
      </div>
    </div>
  );
}

export default ButtonsGroup;
