import { ReactElement, useState, useEffect, memo } from 'react';
import { EMPTY_DATA } from '../../constants';

import { useAppSelector } from '@/hooks/useAppSelector';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { selectProductState } from '@/store/slices/productsSlice';
import { getFilteredProducts, setFilterCategory } from '@/store/slices/filterSlice';
import { ICategoryWithSubcategories } from '@/api/types';

interface ISideBarProps {
  className?: string;
}
const SideBar = ({ className }: ISideBarProps): ReactElement => {
  const [openCategoryIds, setOpenCategoryIds] = useState<string[]>([]);

  const dispatch = useAppDispatch();
  const { categories } = useAppSelector(selectProductState);

  useEffect(() => {}, [categories]);

  const toggleOpenCategory = (categoryId: string): void => {
    if (openCategoryIds.includes(categoryId)) {
      setOpenCategoryIds(openCategoryIds.filter((id) => id !== categoryId));
    } else {
      setOpenCategoryIds([...openCategoryIds, categoryId]);
    }
  };

  const handleCategoryClick = (
    menuElement: ICategoryWithSubcategories
  ): void => {
    dispatch(setFilterCategory(menuElement.id))
    dispatch(getFilteredProducts());
  };

  const renderMenu = (
    menuItems: ICategoryWithSubcategories[]
  ): ReactElement => (
    <ul className="ml-8">
      {menuItems.map((menuItem) => (
        <li key={menuItem.id}>
          <div className="flex justify-between">
            <span
              onClick={(): void => handleCategoryClick(menuItem)}
              onKeyDown={(e): void => {
                if (e.key === 'Enter') {
                  handleCategoryClick(menuItem);
                }
              }}
              role="button"
              tabIndex={0}
            >
              {menuItem.name}
            </span>
            {menuItem.subcategories?.length !== EMPTY_DATA && (
              <button
                type="button"
                className="arrow"
                onClick={(): void => toggleOpenCategory(menuItem.id)}
              >
                {openCategoryIds.includes(menuItem.id) ? '▼' : '►'}
              </button>
            )}
          </div>
          {menuItem.subcategories && openCategoryIds.includes(menuItem.id) && (
            <div className="dropdown">{renderMenu(menuItem.subcategories)}</div>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <div className={className}>
      <nav className="flex w-full justify-between">
        <div className="w-full text-white">{renderMenu(categories)}</div>
      </nav>
    </div>
  );
};

SideBar.defaultProps = {
  className: '',
};

export default memo(SideBar);
