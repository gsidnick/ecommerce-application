import { ICategory, ICategoryWithSubcategories } from '@/api/types';

type BreadcrumbsMaker = (id: string, cat: ICategoryWithSubcategories[]) => void;

export const buildBreadcrumbsMaker = (
  input: ICategoryWithSubcategories[],
  output: ICategory[]
): BreadcrumbsMaker => {
  const initial = input;
  const makeCrumb = (
    categoryID: string,
    categoriesScope: ICategoryWithSubcategories[]
  ): void => {
    categoriesScope.forEach((category) => {
      if (category.id === categoryID) {
        const { id, name } = category;
        output.push({ id, name });
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
