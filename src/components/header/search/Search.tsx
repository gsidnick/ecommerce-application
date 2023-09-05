import {
  ReactElement,
  useState,
  ChangeEvent,
  KeyboardEvent,
} from 'react';
import Image from 'next/image';
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
  };

  const handleSearch = async (): Promise<void> => {
    await dispatch(getFilteredProducts({}));
    await dispatch(getAllFilteredProductsWithoutLimit({}));
    dispatch(setSearchQueryString(searchValue));
  };

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>
  ): void => {
    console.log(event);
    if (event.which === ENTER_KEY_CODE || event.keyCode === ENTER_KEY_CODE) {
      void handleSearch();
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
          onKeyDown={(e): void => void handleKeyDown(e)}
        />
      </div>
      <button
        type="button"
        className={`${styles.searchButton} text-white`}
        onClick={(): void => void handleSearch()}
      >
        SEARCH
      </button>
    </div>
  );
}

export default Search;
