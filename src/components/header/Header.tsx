import { ReactElement } from 'react';
import Link from 'next/link';

import Image from 'next/image';
import Search from './search/Search';
import ButtonsGroup from './buttonsGroup/ButtonsGroup';
import NavMenu from './menu/NavMenu';
import { useAppSelector } from '@/hooks/useAppSelector';
import { selectMenuState } from '@/store/slices/menuSlice';
import BurgerMenu from './BurgerMenu';
import logo from '@/assets/images/logo/logo-orange.png';

function Header(): ReactElement {
  const { isBurgerMenuOpen } = useAppSelector(selectMenuState);

  return (
    <header className="bg-gray-dark">
      <div className="h-167 container mx-auto flex max-w-screen-xl items-center justify-around px-4 py-6">
        <Search />
        <div className="w-40 md:w-72">
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
        </div>
        <ButtonsGroup />
      </div>
      <NavMenu />
      {isBurgerMenuOpen && <BurgerMenu />}
    </header>
  );
}

export default Header;
