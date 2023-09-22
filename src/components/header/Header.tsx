import React, { ReactElement } from 'react';
import Link from 'next/link';

import Search from './search/Search';
import ButtonsGroup from './buttonsGroup/ButtonsGroup';
import NavMenu from './menu/NavMenu';
import Logo from '@/components/ui/icons/Logo';
import { useAppSelector } from '@/hooks/useAppSelector';
import { selectMenuState } from '@/store/slices/menuSlice';
import BurgerMenu from './BurgerMenu';
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
            <Logo />
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
