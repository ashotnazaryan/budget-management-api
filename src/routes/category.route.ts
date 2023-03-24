import { Router } from 'express';
import { isAuthenticated } from '../middleware';
import { getDefaultCategories } from '../services';

const categoryRoute = () => {
  const router = Router();

  router.get('/getDefaultCategories', isAuthenticated, getDefaultCategories);

  return router;
};

export { categoryRoute };
