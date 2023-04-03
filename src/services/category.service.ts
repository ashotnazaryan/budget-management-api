import { Request, Response } from 'express';
import { CONFIG } from '../core/configs';
import { Category, CategoryInput, DefaultCategory } from '../models';

const getDefaultCategories = async (request: Request, response: Response) => {
  try {
    const categories = await DefaultCategory.find();

    return response.status(200).json({ data: categories });
  } catch {
    response.status(200).json({ data: null });
  }
};

const getCategories = async (request: Request, response: Response) => {
  const userId = (request.user as any)?.userId;

  try {
    const categories = await Category.find({ userId });

    if (!categories?.length) {
      return response.redirect(`/api/categories${CONFIG.routes.getDefaultCategories}`);
    }

    return response.status(200).json({ data: categories });
  } catch {
    response.status(200).json({ data: null });
  }
};

const getCategoryById = async (request: Request, response: Response) => {
  const categoryId = request.params.categoryId;

  try {
    const category = await Category.findById(categoryId);

    if (category) {
      return response.status(200).json({ data: category });
    }

    return response.status(404).json({ error: { message: 'Category not found', status: 404 } });
  } catch {
    response.status(500).json({ error: { message: 'Internal server error', status: 500 } });
  }
};

const createCategory = async (request: Request<{}, {}, CategoryInput>, response: Response) => {
  const userId = (request.user as any)?.userId;
  const newCategory = { ...request.body, userId };

  try {
    const defaultCategories = await DefaultCategory.find();
    const categories = await Category.find({ userId });
    const categoryAvailable = categories.some((category) => category.name === newCategory.name);
    const defaultCategoryList: CategoryInput[] = defaultCategories.map((category) => ({
      userId,
      icon: category.icon,
      name: category.name,
      type: category.type,
      isDefaultCategory: category.isDefaultCategory
    }));

    if (!categories.length) {
      await Category.insertMany([
        ...defaultCategoryList,
        newCategory
      ]);

      return response.status(201).json({ data: null });
    }

    if (!categoryAvailable) {
      await Category.create(newCategory);

      return response.status(201).json({ data: null });
    }

    return response.status(400).json({ error: { message: 'Category already exists', status: 400 } });

  } catch (error) {
    response.status(500).json({ error: { message: 'Internal server error', status: 500 } });
  }
};

const editCategory = async (request: Request, response: Response) => {
  const categoryId = request.params.categoryId;
  const category = request.body;

  try {
    await Category.findByIdAndUpdate(categoryId, category);

    return response.status(201).json({ data: null });
  } catch {
    response.status(500).json({ error: { message: 'Internal server error', status: 500 } });
  }
};

export { getDefaultCategories, getCategories, getCategoryById, createCategory, editCategory };
