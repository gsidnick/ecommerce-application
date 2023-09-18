/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { selectAuthState, resetAuthState } from '@/store/slices/authSlice';
import { menu as menuData } from '../menu/menuData';
import { selectMenuState, setStateBurgerMenu } from '@/store/slices/menuSlice';
import CustomerController from '@/api/controllers/CustomerController';
import CloseIcon from '@/components/ui/icons/CloseIcon';
import { ERoute } from '@/data/routes';
import Logo from '@/components/ui/icons/Logo';
import styles from './styles.module.css';
import { getCartProducts } from '../../../store/slices/cartSlice';

const ZERO_PRODUCTS = 0;

const BurgerMenu: NextPage = () => {
  const dispatch = useAppDispatch();

  const { isBurgerMenuOpen } = useAppSelector(selectMenuState);
  const { authState } = useAppSelector(selectAuthState);
  const userCartProducts = useAppSelector(getCartProducts);

  const router = useRouter();

  if (!isBurgerMenuOpen) return null;

  const closeMenu = (): void => {
    dispatch(setStateBurgerMenu(false));
    const body = document.querySelector('body');
    body?.classList.remove('modal');
  };

  const handleNavigate = (link: string) => (): void => {
    closeMenu();
    router.push(link).catch((error) => {
      console.log(error);
    });
  };

  const handleLogOut = (): void => {
    void new CustomerController().logoutCustomer();
    dispatch(resetAuthState());
    closeMenu();
    toast.success('You have successfully logged out');
  };

  return (
    <>
      <div
        className={styles.menu}
        role="button"
        onClick={closeMenu}
        aria-hidden="true"
      />
      <div
        className={`${styles.menuWrapper} ${
          isBurgerMenuOpen ? styles.active : ''
        }`}
      >
        <div className={styles.menuContent} role="button">
          <div className={`${styles.menuHeader} p-2`}>
            <div className={styles.logo}>
              <Link href="/">
                <Logo />
              </Link>
            </div>
            <CloseIcon className={styles.btnClose} onClick={closeMenu} />
          </div>
          <ul className={`${styles.navBar} py-3`}>
            {menuData.map((item) => (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events
              <li
                key={item.name}
                className="w-full opacity-75 hover:bg-indigo-500"
                onClick={handleNavigate(item.link)}
              >
                <div className="p-3">
                  <p>{item.name}</p>
                </div>
              </li>
            ))}
            <li
              key="cart"
              className="w-full opacity-75 hover:bg-indigo-500"
              onClick={handleNavigate(ERoute.cart)}
            >
              <div className="p-3">
                <p>
                  CART{' '}
                  {userCartProducts.length > ZERO_PRODUCTS && (
                    <span className="ml-2 inline-flex h-4 w-4 items-center justify-center rounded-full bg-orange-main p-1 text-xs font-semibold text-black">
                      {userCartProducts.length}
                    </span>
                  )}
                </p>
              </div>
            </li>
            {authState && (
              <>
                <li
                  key="profile"
                  className="w-full opacity-75 hover:bg-indigo-500"
                  onClick={handleNavigate(ERoute.profile)}
                >
                  <div className="p-3">
                    <p>PROFILE</p>
                  </div>
                </li>
                <li
                  key="log-out"
                  className="w-full opacity-75 hover:bg-indigo-500"
                  onClick={handleLogOut}
                >
                  <div className="p-3">
                    <p>LOG OUT</p>
                  </div>
                </li>
              </>
            )}
            {!authState && (
              <>
                <li
                  key="log-in"
                  className="w-full opacity-75 hover:bg-indigo-500"
                  onClick={handleNavigate(ERoute.login)}
                >
                  <div className="p-3">
                    <p>LOG IN</p>
                  </div>
                </li>
                <li
                  key="sign-up"
                  className="w-full opacity-75 hover:bg-indigo-500"
                  onClick={handleNavigate(ERoute.signup)}
                >
                  <div className="p-3">
                    <p>SIGN UP</p>
                  </div>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
