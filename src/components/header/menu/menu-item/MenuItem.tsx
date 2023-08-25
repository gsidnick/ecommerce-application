import Link from 'next/link';
import { ReactElement } from 'react';

import { IMenuLink } from './types';

interface IMenuItem {
  item: IMenuLink;
}

function MenuItem({ item }: IMenuItem): ReactElement {
  return (
    <li>
      <Link href={item.link}>{item.name}</Link>
    </li>
  );
}

export default MenuItem;
