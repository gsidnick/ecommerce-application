import React, { ReactElement } from 'react';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import {
  setFilterBreadCrumbs,
  setFilterCategory,
} from '@/store/slices/filterSlice';
import styles from './styles.module.css';
import { useAppSelector } from '@/hooks/useAppSelector';
import { selectProductState } from '@/store/slices/productsSlice';
import { buildBreadcrumbsMaker } from '@/components/CategoryCrumb/buildCrumbMaker';
import { ICategory } from '@/api/types';

interface CrumbProps {
  id: string;
  name: string;
}

function CategoryCrumb({ id, name }: CrumbProps): ReactElement {
  const { categories } = useAppSelector(selectProductState);
  const dispatch = useAppDispatch();
  const crumbHandler = (): void => {
    dispatch(setFilterCategory(id));
    const breadcrumbs: ICategory[] = [];
    const makeBreadcrumbs = buildBreadcrumbsMaker(categories, breadcrumbs);
    makeBreadcrumbs(id, categories);
    dispatch(setFilterBreadCrumbs(breadcrumbs.reverse()));
  };

  return (
    <>
      <span className={styles.separator}>/</span>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <span
        className={styles.link}
        role="button"
        tabIndex={0}
        onClick={crumbHandler}
      >
        {name}
      </span>
    </>
  );
}

export default CategoryCrumb;
