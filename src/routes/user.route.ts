import { Router } from 'express';
import { CONFIG } from '../core/configs';
import { isAuthenticated } from '../middleware';
import { getUser } from '../services';

const userRoute = (): Router => {
  const router = Router();

  router.get(CONFIG.routes.getUser, isAuthenticated, getUser);

  return router;
};

export { userRoute };
