import { Request, Response } from 'express';
import DefaultCategory from '../models/category';

const getDefaultCategories = async (request: Request, response: Response) => {
  try {
    const categories = await DefaultCategory.find();

    return response.status(200).json({ data: categories });
  } catch {
    response.status(200).json({ data: null });
  }
};

export { getDefaultCategories };
