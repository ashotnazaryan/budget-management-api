import { Router } from 'express';
import { CONFIG } from '../core/configs';
import { isAuthenticated } from '../middleware';
import { getDefaultAccounts } from '../services';

const accountRoute = () => {
  const router = Router();

  router.get(CONFIG.routes.getDefaultAccounts, isAuthenticated, getDefaultAccounts);

  return router;
};

export { accountRoute };
