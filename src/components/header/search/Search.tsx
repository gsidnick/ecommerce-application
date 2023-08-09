import { ReactElement } from 'react';
import Image from 'next/image';
import search from '@/assets/images/search-icon.png';

function Search(): ReactElement {
  return (
    <div className="flex items-center justify-center gap-2">
      <Image src={search} alt="search" />
      <span className='text-white'>ПОИСК</span>
    </div>
  );
}

export default Search;
