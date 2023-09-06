import React, { ReactElement } from 'react';
import Link from 'next/link';

import Image from 'next/image';
import Search from './search/Search';
import ButtonsGroup from './buttonsGroup/ButtonsGroup';
import NavMenu from './menu/NavMenu';
import { useAppSelector } from '@/hooks/useAppSelector';
import { selectMenuState } from '@/store/slices/menuSlice';
import BurgerMenu from './BurgerMenu';
import logo from '@/assets/images/logo/logo-orange.png';
import styles from './styles.module.css';

function Header(): ReactElement {
  const { isBurgerMenuOpen } = useAppSelector(selectMenuState);

  return (
    <header className="bg-gray-dark">
      <div className={styles.container}>
        <div className={styles.search}>
          <Search />
        </div>
        <div className={styles.logo}>
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
        </div>
        <div className={styles.buttonsGroup}>
          <ButtonsGroup />
        </div>
      </div>
      <NavMenu />
      {isBurgerMenuOpen && <BurgerMenu />}
    </header>
  );
}

export default Header;
