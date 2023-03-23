import { Router } from 'express';
import { loggedIn } from '../middleware';
import { getDefaultCategories } from '../services';

const categoryRoute = () => {
  const router = Router();

  router.get('/getDefaultCategories', loggedIn, getDefaultCategories);

  return router;
};

export { categoryRoute };
