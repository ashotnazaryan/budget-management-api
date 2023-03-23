import { Router } from 'express';
import { loggedIn } from '../middleware/auth.middleware';
import { getDefaultCategories } from '../services/category.service';

const categoryRoute = () => {
  const router = Router();

  router.get('/getDefaultCategories', loggedIn, getDefaultCategories);

  return router;
};

export { categoryRoute };
