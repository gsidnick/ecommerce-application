import { ReactElement } from 'react';

import MenuItem from './menu-item/MenuItem';
import { menu } from './menuData';

function Menu(): ReactElement {
  return (
    <div className="container mx-auto mt-5 hidden h-10 md:block">
      <nav>
        <ul className="flex items-center justify-center gap-x-5 text-white">
          {menu.map((item) => (
            <MenuItem key={item.link} item={item} />
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Menu;
