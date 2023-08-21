/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useAppSelector } from '@/hooks/useAppSelector';
import { selectAuthState, resetAuthState } from '@/store/slices/authSlice';
import { menu as menuData } from '../menu/menuData';
import { selectMenuState, setStateBurgerMenu } from '@/store/slices/menuSlice';
import CustomerController from '@/api/controllers/CustomerController';
import CloseIcon from '@/components/ui/icons/CloseIcon';
import logo from '@/assets/images/logo/logo-orange.png';

import styles from './BurgerMenu.module.css';

const BurgerMenu: NextPage = () => {
  const dispatch = useAppDispatch();

  const { isBurgerMenuOpen } = useAppSelector(selectMenuState);
  const { authState } = useAppSelector(selectAuthState);
  const router = useRouter();

  if (!isBurgerMenuOpen) return null;

  const closeMenu = (): void => {
    dispatch(setStateBurgerMenu(false));
  };

  const handleNavigate = (link: string) => (): void => {
    closeMenu();
    router.push(link).catch((error) => {
      console.log(error);
    });
  };

  const handleLogOut = (): void => {
    new CustomerController().logoutCustomer();
    dispatch(resetAuthState());
    closeMenu();
    toast.success('You have successfully logged out');
  };

  return (
    <div
      className={styles.menu}
      role="button"
      onClick={closeMenu}
      aria-hidden="true"
    >
      <div className={styles.menuWrapper}>
        <div className={styles.menuContent} role="button">
          <div className={`${styles.menuHeader} p-2`}>
            <Link href="/">
              <Image
                src={logo}
                alt="logo"
                className={styles.menuLogoIcon}
                width={150}
                height={10}
              />
            </Link>
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
              key="sign-in"
              className="w-full opacity-75 hover:bg-indigo-500"
              onClick={authState ? handleLogOut : handleNavigate('/login')}
            >
              <div className="p-3">
                <p>{authState ? 'Sign Out' : 'Sign In'}</p>
              </div>
            </li>
            {!authState && (
              <li
                key="sign-up"
                className="w-full opacity-75 hover:bg-indigo-500"
                onClick={handleNavigate('/signup')}
              >
                <div className="p-3">
                  <p>Sign Up</p>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

BurgerMenu.defaultProps = {
  style: {},
};
export default BurgerMenu;
