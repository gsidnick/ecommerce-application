import { ReactElement } from 'react';

import Image from 'next/image';
import HeaderBrow from './headerBrow/HeaderBrow';
import Search from './search/Search';
import ButtonsGroup from './buttonsGroup/ButtonsGroup';
import logo from '@/assets/images/logo/logo-orange.png';

function Header(): ReactElement {
  return (
    <header className="bg-gray-dark">
      <HeaderBrow />
      <div className="h-167 container mx-auto flex max-w-screen-xl items-center justify-around px-4 py-6">
        <Search />
        <Image src={logo} alt="logo" />
        <ButtonsGroup />
      </div>
    </header>
  );
}

export default Header;
