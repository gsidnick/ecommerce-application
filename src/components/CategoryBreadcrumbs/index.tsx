import React, { ReactElement } from 'react';
import Link from 'next/link';
import { useAppSelector } from '@/hooks/useAppSelector';
import {
  resetAllFilters,
  selectFilterState,
  setFilterBreadCrumbs,
} from '@/store/slices/filterSlice';
import styles from './styles.module.css';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import CategoryCrumb from '@/components/CategoryCrumb';

const CategoryBreadcrumbs = (): ReactElement => {
  const { filterBreadcrumbs } = useAppSelector(selectFilterState);
  const dispatch = useAppDispatch();

  const linkHandler = (): void => {
    dispatch(resetAllFilters());
    dispatch(setFilterBreadCrumbs([]));
  };

  return (
    <div className={styles.breadcrumbs}>
      <Link className={styles.link} href="/catalog" onClick={linkHandler}>
        Catalog
      </Link>
      {filterBreadcrumbs.map(({ id, name }) => {
        const key = `crumb${id}`;
        return <CategoryCrumb key={key} id={id} name={name} />;
      })}
    </div>
  );
};

export default CategoryBreadcrumbs;
