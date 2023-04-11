import { Request, Response } from 'express';
import { Category, CategoryInput, DefaultCategory } from '../models';
import { mapCategories } from '../helpers';
import { updateCategoryTransactions, updateSummaryCategoryTransactions } from '../services';

const getCategories = async (request: Request, response: Response) => {
  const userId = (request.user as any)?.userId;

  try {
    let categories = await Category.find({ userId });
    let mappedCategories = mapCategories(categories, userId);

    if (categories.length) {
      return response.status(200).json({ data: mappedCategories });
    }

    const defaultCategories = await DefaultCategory.find();
    const defaultCategoryList: CategoryInput[] = mapCategories(defaultCategories, userId);
    await Category.insertMany(defaultCategoryList);
    categories = await Category.find({ userId });
    mappedCategories = mapCategories(categories, userId);

    return response.status(200).json({ data: mappedCategories });
  } catch {
    return response.status(200).json({ data: null });
  }
};

const getCategoryById = async (request: Request<{ id: CategoryInput['id'] }, {}, CategoryInput>, response: Response) => {
  const id = request.params.id;

  try {
    const category = await Category.findById(id);

    if (category) {
      return response.status(200).json({ data: category });
    }

    return response.status(404).json({ error: { message: 'Category not found', status: 404 } });
  } catch {
    return response.status(500).json({ error: { message: 'Internal server error', status: 500 } });
  }
};

const createCategory = async (request: Request<{}, {}, CategoryInput>, response: Response) => {
  const userId = (request.user as any)?.userId;
  const newCategory: CategoryInput = {
    ...request.body,
    userId,
    isDefaultCategory: false
  };

  try {
    const categories = await Category.find({ userId });
    const categoryAvailable = categories.some((category) => category.name === newCategory.name);

    if (!categoryAvailable) {
      await Category.create(newCategory);

      return response.status(201).json({ data: null });
    }

    return response.status(409).json({ error: { message: 'Category already exists', status: 409 } });

  } catch (error) {
    return response.status(500).json({ error: { message: 'Internal server error', status: 500 } });
  }
};

const editCategory = async (request: Request<{ id: CategoryInput['id'] }, {}, CategoryInput>, response: Response) => {
  const id = request.params.id;
  const category = request.body;
  const userId = (request.user as any)?.userId;

  try {
    const categories = await Category.find({ userId });
    const categoryAvailable = categories.some((item) => item.name === category.name && item.id !== id);

    if (categoryAvailable) {
      return response.status(409).json({ error: { message: 'Category already exists', status: 409 } });
    }

    await Category.findByIdAndUpdate(id, category);
    await updateSummaryCategoryTransactions(userId, id!, category);
    await updateCategoryTransactions(userId, id!, category);

    return response.status(200).json({ data: null });
  } catch {
    return response.status(500).json({ error: { message: 'Internal server error', status: 500 } });
  }
};

export {
  getCategories,
  getCategoryById,
  createCategory,
  editCategory
};
