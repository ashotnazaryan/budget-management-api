import { Router } from 'express';
import { CONFIG } from '../core/configs';
import { isAuthenticated } from '../middleware';
import { getDefaultCategories, getCategories, getCategoryById, createCategory, editCategory } from '../services';

const categoryRoute = () => {
  const router = Router();

  router.get(CONFIG.routes.getDefaultCategories, isAuthenticated, getDefaultCategories);
  router.get(CONFIG.routes.getCategories, isAuthenticated, getCategories);
  router.get(CONFIG.routes.getCategoryById, isAuthenticated, getCategoryById);
  router.post(CONFIG.routes.createCategory, isAuthenticated, createCategory);
  router.put(CONFIG.routes.editCategory, isAuthenticated, editCategory);

  return router;
};

export { categoryRoute };
