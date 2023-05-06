import { DEFAULT_ACCOUNTS, DEFAULT_CATEGORIES } from '../constants';
import { DefaultAccount, DefaultCategory } from '../models';

const createDefaultCollections = async (): Promise<void> => {
  const availableDefaultAccounts = await DefaultAccount.find();
  const availableDefaultCategories = await DefaultCategory.find();

  if (!availableDefaultAccounts.length) {
    const defaultAccounts = DEFAULT_ACCOUNTS;

    await DefaultAccount.insertMany(defaultAccounts);
  }

  if (!availableDefaultCategories.length) {
    const defaultCategories = DEFAULT_CATEGORIES;

    await DefaultCategory.insertMany(defaultCategories);
  }
};

export { createDefaultCollections };
