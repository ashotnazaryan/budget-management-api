import { CategoryDocument, CategoryDTO } from '../models';

export const mapCategories = (categories: CategoryDocument[], userId: string): CategoryDTO[] => {
  return categories.map((category) => mapCategory(category, userId));
};

export const mapCategory = (category: CategoryDocument, userId: string): CategoryDTO => {
  return {
    userId,
    id: category.id,
    name: category.name,
    icon: category.icon,
    type: category.type,
    isDefaultCategory: category.isDefaultCategory,
    nameKey: category.nameKey
  };
};
