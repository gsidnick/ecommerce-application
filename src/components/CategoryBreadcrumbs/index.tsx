import React, { ReactElement } from 'react';
import Link from 'next/link';
import { useAppSelector } from '@/hooks/useAppSelector';
import {
  selectFilterState,
  setFilterBreadCrumbs,
} from '@/store/slices/filterSlice';
import styles from './styles.module.css';
import { useAppDispatch } from '@/hooks/useAppDispatch';

const CategoryBreadcrumbs = (): ReactElement => {
  const { filterBreadcrumbs } = useAppSelector(selectFilterState);
  const dispatch = useAppDispatch();

  const linkHandler = (): void => {
    dispatch(setFilterBreadCrumbs([]));
  };

  return (
    <div className={styles.breadcrumbs}>
      <Link className={styles.link} href="/catalog" onClick={linkHandler}>
        Catalog
      </Link>
      {filterBreadcrumbs.map((crumb) => crumb)}
    </div>
  );
};

export default CategoryBreadcrumbs;
