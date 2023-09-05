import React, { ReactElement } from 'react';
import { ICategoryWithSubcategories } from '@/api/types';
import CategoryCrumb from '@/components/CategoryCrumb';

type BreadcrumbsMaker = (id: string, cat: ICategoryWithSubcategories[]) => void;

export const buildBreadcrumbsMaker = (
  input: ICategoryWithSubcategories[],
  output: ReactElement[]
): BreadcrumbsMaker => {
  const initial = input;
  const makeCrumb = (
    categoryID: string,
    categoriesScope: ICategoryWithSubcategories[]
  ): void => {
    categoriesScope.forEach((category) => {
      if (category.id === categoryID) {
        output.push(<CategoryCrumb id={category.id} name={category.name} />);
        if (category.parent) {
          makeCrumb(category.parent, initial);
        }
      } else if (category.subcategories) {
        makeCrumb(categoryID, category.subcategories);
      }
    });
  };

  return makeCrumb;
};
