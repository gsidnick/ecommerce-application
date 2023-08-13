import { ReactElement } from 'react';

import MenuItem from './menu-item/MenuItem';
import { menu } from './menyData';

function Menu(): ReactElement {
  return (
    <div className='container mx-auto h-10 mt-5'>
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
