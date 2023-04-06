import { CategoryDocument } from '../models';

export const mapCategories = (categories: CategoryDocument[], userId: string) => {
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
