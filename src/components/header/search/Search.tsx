import { ReactElement, useState, ChangeEvent, KeyboardEvent } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import search from '@/assets/images/search-icon.png';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import {
  setSearchQueryString,
  getFilteredProducts,
  getAllFilteredProductsWithoutLimit,
} from '@/store/slices/filterSlice';

import styles from './styles.module.css';

const ENTER_KEY_CODE = 13;

function Search(): ReactElement {
  const [searchValue, setSearchValue] = useState<string>('');
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
  };

  const handleSearch = (): void => {
    dispatch(setSearchQueryString(searchValue));
    dispatch(getFilteredProducts({}));
    dispatch(getAllFilteredProductsWithoutLimit({}));
    if (router.pathname !== '/catalog') {
      router.push('/catalog').catch((error) => {
        toast.error(error as string);
      });
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.which === ENTER_KEY_CODE || event.keyCode === ENTER_KEY_CODE) {
      handleSearch();
    }
  };

  return (
    <div className="hidden items-center justify-center gap-2 md:flex">
      <Image src={search} alt="search" />
      <div className={styles.searchInputWrapper}>
        <input
          type="text"
          name="search"
          className={styles.searchInput}
          onChange={handleChange}
          onKeyDown={(e): void => handleKeyDown(e)}
        />
      </div>
      <button
        type="button"
        className={`${styles.searchButton} text-white`}
        onClick={(): void => handleSearch()}
      >
        SEARCH
      </button>
    </div>
  );
}

export default Search;
