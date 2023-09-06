import React, { ReactElement, useState, useEffect, memo } from 'react';
import { EMPTY_DATA } from '@/constants';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { selectProductState } from '@/store/slices/productsSlice';
import {
  setFilterBreadCrumbs,
  setFilterCategory,
} from '@/store/slices/filterSlice';
import { ICategoryWithSubcategories } from '@/api/types';
import { buildBreadcrumbsMaker } from '@/components/CategoryCrumb/buildCrumbMaker';
import styles from './styles.module.css';

const SideBar = (): ReactElement => {
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
    dispatch(setFilterCategory(menuElement.id));
    const breadcrumbs: ReactElement[] = [];
    const makeBreadcrumbs = buildBreadcrumbsMaker(categories, breadcrumbs);
    makeBreadcrumbs(menuElement.id, categories);
    dispatch(setFilterBreadCrumbs(breadcrumbs.reverse()));
  };

  const renderMenu = (
    menuItems: ICategoryWithSubcategories[]
  ): ReactElement => (
    <ul className="ml-4">
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
    <div className={styles.categoriesWrapper}>
      <nav className="flex w-full flex-col justify-between">
        <p className={styles.titleWrapper}>Search</p>
        <p className={styles.titleWrapper}>Categories</p>
        <div className="w-full text-white">{renderMenu(categories)}</div>
      </nav>
    </div>
  );
};

SideBar.defaultProps = {
  className: '',
};

export default memo(SideBar);
