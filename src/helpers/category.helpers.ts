import { CategoryDocument, CategoryInput } from '../models';

export const mapCategories = (categories: CategoryDocument[], userId: string): CategoryInput[] => {
  return categories.map((category) => {
    return {
      userId,
      id: category.id,
      name: category.name,
      icon: category.icon,
      type: category.type,
      isDefaultCategory: category.isDefaultCategory
    };
  });
};
