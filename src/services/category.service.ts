import { Request, Response } from 'express';
import { Account, Category, CategoryInput, DefaultCategory } from '../models';
import { mapCategories, mapCategory } from '../helpers';
import { deleteCategoryTransactions, updateAccountBalance, updateCategoryTransactions, updateSummary } from '../services';
import { MAX_CATEGORIES_PER_USER } from '../core/configs';

const ensureDefaultCategories = async (userId: string): Promise<void> => {
  const count = await Category.countDocuments({ userId });

  if (count > 0) {
    return;
  }

  const defaultCategories = mapCategories(await DefaultCategory.find(), userId);
  await Category.insertMany(defaultCategories);
};

const getCategories = async (request: Request, response: Response) => {
  const userId = request.user?.userId;

  if (!userId) {
    return;
  }

  try {
    await ensureDefaultCategories(userId);
    const categories = await Category.find({ userId });

    return response.status(200).json(mapCategories(categories, userId));
  } catch {
    return response.status(500).json({ message: 'Internal server error', status: 500 });
  }
};

const getCategoryById = async (request: Request<{ id: CategoryInput['id'] }, unknown, CategoryInput>, response: Response) => {
  const id = request.params.id;
  const userId = request.user?.userId;

  if (!userId) {
    return;
  }

  try {
    const category = await Category.findById(id);

    if (category) {
      return response.status(200).json(mapCategory(category, userId));
    }

    return response.status(404).json({ message: 'Category not found', status: 404 });
  } catch {
    return response.status(500).json({ message: 'Internal server error', status: 500 });
  }
};

const createCategory = async (request: Request<unknown, unknown, CategoryInput>, response: Response) => {
  const userId = request.user?.userId;
  const newCategory: CategoryInput = {
    ...request.body,
    userId,
    isDefaultCategory: false
  };

  try {
    const categories = await Category.find({ userId });
    const reachedUserLimit = categories.length >= MAX_CATEGORIES_PER_USER;

    if (reachedUserLimit) {
      return response.status(403).json({ message: 'You have reaced your maximum amount of categories.', messageKey: 'CATEGORIES.ERRORS.REACHED_USER_LIMIT', status: 403 });
    }

    const categoryAvailable = categories.some((category) => category.name === newCategory.name);

    if (!categoryAvailable) {
      await Category.create(newCategory);

      return response.status(201).json(null);
    }

    return response.status(409).json({ message: 'Category already exists', messageKey: 'CATEGORIES.ERRORS.CATEGORY_EXISTS', status: 409 });

  } catch (error) {
    return response.status(500).json({ message: 'Internal server error', status: 500 });
  }
};

const editCategory = async (request: Request<{ id: CategoryInput['id'] }, unknown, CategoryInput>, response: Response) => {
  const id = request.params.id;
  const category = request.body;
  const userId = request.user?.userId;

  if (!userId || !id) {
    return;
  }

  try {
    const categories = await Category.find({ userId });
    const categoryAvailable = categories.some((item) => item.name === category.name && item.id !== id);

    if (categoryAvailable) {
      return response.status(409).json({ message: 'Category already exists', messageKey: 'CATEGORIES.ERRORS.CATEGORY_EXISTS', status: 409 });
    }

    await Category.findByIdAndUpdate(id, category);
    await updateCategoryTransactions(userId, id, category);
    await updateSummary(userId);

    return response.status(200).json(null);
  } catch {
    return response.status(500).json({ message: 'Internal server error', status: 500 });
  }
};

const deleteCategory = async (request: Request<{ id: CategoryInput['id'] }, unknown, unknown>, response: Response) => {
  const id = request.params.id;
  const userId = request.user?.userId;

  if (!userId) {
    return;
  }

  try {
    const category = await Category.findById(id);

    if (category) {
      await Category.findByIdAndDelete(id);
      await deleteCategoryTransactions(userId, id);

      const allUserAccounts = await Account.find({ userId });

      await updateAccountBalance(allUserAccounts, userId);
      await updateSummary(userId);

      return response.status(204).json(null);
    }

    return response.status(404).json({ message: 'Category not found', status: 404 });
  } catch {
    return response.status(500).json({ message: 'Internal server error', status: 500 });
  }
};

export {
  getCategories,
  getCategoryById,
  createCategory,
  editCategory,
  deleteCategory
};
