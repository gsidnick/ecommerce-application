import { ReactElement } from 'react';
import Link from 'next/link';

import Image from 'next/image';
import HeaderBrow from './headerBrow/HeaderBrow';
import Search from './search/Search';
import ButtonsGroup from './buttonsGroup/ButtonsGroup';
import NavMenu from './menu/NavMenu';
import logo from '@/assets/images/logo/logo-orange.png';

function Header(): ReactElement {
  return (
    <header className="bg-gray-dark">
      <HeaderBrow />
      <div className="h-167 container mx-auto flex max-w-screen-xl items-center justify-around px-4 py-6">
        <Search />
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
        <ButtonsGroup />
      </div>
      <NavMenu />
    </header>
  );
}

export default Header;
