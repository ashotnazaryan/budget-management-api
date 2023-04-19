import { Router } from 'express';
import { CONFIG } from '../core/configs';
import { isAuthenticated } from '../middleware';
import { getCategories, getCategoryById, createCategory, editCategory, deleteCategory } from '../services';

const categoryRoute = () => {
  const router = Router();

  router.get(CONFIG.routes.getCategories, isAuthenticated, getCategories);
  router.post(CONFIG.routes.createCategory, isAuthenticated, createCategory);
  router.get(CONFIG.routes.getCategoryById, isAuthenticated, getCategoryById);
  router.put(CONFIG.routes.editCategory, isAuthenticated, editCategory);
  router.delete(CONFIG.routes.deleteCategory, isAuthenticated, deleteCategory);

  return router;
};

export { categoryRoute };
