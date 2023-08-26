import CategoryRepository from '@/api/repositories/CategoryRepository';
import { ICategoryWithSubcategories } from '@/api/types';

class CategoryController {
  private categoryRepository: CategoryRepository;

  constructor() {
    this.categoryRepository = new CategoryRepository();
  }

  public async getCategoriesWithSubcategories(): Promise<
    ICategoryWithSubcategories[]
  > {
    const response = await this.categoryRepository.getCategories();
    const categories = [] as ICategoryWithSubcategories[];
    if (response && response.body) {
      const { results } = response.body;
      results.forEach((item) => {
        categories.push({
          id: item.id,
          name: item.name['en-US'],
          parent: item.parent?.id,
        });
      });
    }
    return CategoryController.collectSubcategories(categories);
  }

  private static collectSubcategories(
    arr: ICategoryWithSubcategories[],
    parent?: string
  ): ICategoryWithSubcategories[] {
    return arr
      .filter((item) => item.parent === parent)
      .map((subcategory) => ({
        ...subcategory,
        subcategories: CategoryController.collectSubcategories(
          arr,
          subcategory.id
        ),
      }));
  }
}

export default CategoryController;
