import { CategoryDTO } from '../models';

export const DEFAULT_CATEGORIES: Omit<CategoryDTO, 'id'>[] = [
  {
    name: 'Rent',
    icon: 'rent',
    type: 0,
    isDefaultCategory: true,
    nameKey: 'CATEGORIES.ITEMS.RENT'
  },
  {
    name: 'Groceries',
    icon: 'groceries',
    type: 0,
    isDefaultCategory: true,
    nameKey: 'CATEGORIES.ITEMS.GROCERIES'
  },
  {
    name: 'Media',
    icon: 'media',
    type: 0,
    isDefaultCategory: true,
    nameKey: 'CATEGORIES.ITEMS.MEDIA'
  },
  {
    name: 'Transportation',
    icon: 'transportation',
    type: 0,
    isDefaultCategory: true,
    nameKey: 'CATEGORIES.ITEMS.TRANSPORTATION'
  },
  {
    name: 'Other',
    icon: 'otherExpense',
    type: 0,
    isDefaultCategory: true,
    nameKey: 'CATEGORIES.ITEMS.OTHER_EXPENSE'
  },
  {
    name: 'Salary',
    icon: 'salary',
    type: 1,
    isDefaultCategory: true,
    nameKey: 'CATEGORIES.ITEMS.SALARY'
  },
  {
    name: 'Other',
    icon: 'otherIncome',
    type: 1,
    isDefaultCategory: true,
    nameKey: 'CATEGORIES.ITEMS.OTHER_INCOME'
  }
];
