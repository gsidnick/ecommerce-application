import Link from 'next/link';
import { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import {
  resetAllFilters,
  setFilterBreadCrumbs,
} from '@/store/slices/filterSlice';

import { IMenuLink } from './types';

interface IMenuItem {
  item: IMenuLink;
}

function MenuItem({ item }: IMenuItem): ReactElement {
  const dispatch = useAppDispatch();

  const router = useRouter();
  const { pathname } = router;

  const isActive = pathname === item.link;

  const handleClick = (): void => {
    if (item.name === 'CATALOG') {
      dispatch(resetAllFilters());
      dispatch(setFilterBreadCrumbs([]));
    }
  };

  return (
    <li
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
      role="button"
      onClick={handleClick}
      onKeyDown={(e): void => {
        if (e.key === 'Enter') {
          handleClick();
        }
      }}
      tabIndex={0}
      aria-hidden="true"
      className={`${
        isActive
          ? 'border-b-2 border-orange-500'
          : 'border-b-2 border-transparent'
      } transition duration-300 ease-in-out hover:border-b-2 hover:border-orange-500`}
    >
      <Link href={item.link}>{item.name}</Link>
    </li>
  );
}

export default MenuItem;
