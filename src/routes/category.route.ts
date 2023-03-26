import { Router } from 'express';
import { CONFIG } from '../core/configs';
import { isAuthenticated } from '../middleware';
import { getDefaultCategories } from '../services';

const categoryRoute = () => {
  const router = Router();

  router.get(CONFIG.routes.getDefaultCategories, isAuthenticated, getDefaultCategories);

  return router;
};

export { categoryRoute };
