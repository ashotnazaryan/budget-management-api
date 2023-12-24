import { Router } from 'express';
import { CONFIG } from '../core/configs';
import { isAuthenticated } from '../middleware';
import { getCategories, getCategoryById, createCategory, editCategory, deleteCategory } from '../services';

const categoryRoute = (): Router => {
  const router = Router();

  router.get(CONFIG.routes.getCategories, isAuthenticated, getCategories);
  router.get(CONFIG.routes.getCategoryById, isAuthenticated, getCategoryById);
  router.post(CONFIG.routes.createCategory, isAuthenticated, createCategory);
  router.put(CONFIG.routes.editCategory, isAuthenticated, editCategory);
  router.delete(CONFIG.routes.deleteCategory, isAuthenticated, deleteCategory);

  return router;
};

export { categoryRoute };
