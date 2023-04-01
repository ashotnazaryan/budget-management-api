import { Router } from 'express';
import { CONFIG } from '../core/configs';
import { isAuthenticated } from '../middleware';
import { getDefaultCategories, getCategories, createCategory } from '../services';

const categoryRoute = () => {
  const router = Router();

  router.get(CONFIG.routes.getDefaultCategories, isAuthenticated, getDefaultCategories);
  router.get(CONFIG.routes.getCategories, isAuthenticated, getCategories);
  router.post(CONFIG.routes.createCategory, isAuthenticated, createCategory);

  return router;
};

export { categoryRoute };
