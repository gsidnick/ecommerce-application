import Link from 'next/link';
import { ReactElement } from 'react';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { resetAllFilters } from '@/store/slices/filterSlice';

import { IMenuLink } from './types';

interface IMenuItem {
  item: IMenuLink;
}

function MenuItem({ item }: IMenuItem): ReactElement {
  const dispatch = useAppDispatch();
  const handleClick = (): void => {
    console.log('item', item);
    if (item.name === 'CATALOG') {
      dispatch(resetAllFilters());
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
    >
      <Link href={item.link}>{item.name}</Link>
    </li>
  );
}

export default MenuItem;
