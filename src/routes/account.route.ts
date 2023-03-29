import { Router } from 'express';
import { CONFIG } from '../core/configs';
import { isAuthenticated } from '../middleware';
import { getDefaultAccounts, getAccounts, createAccount } from '../services';

const accountRoute = () => {
  const router = Router();

  router.get(CONFIG.routes.getDefaultAccounts, isAuthenticated, getDefaultAccounts);
  router.get(CONFIG.routes.getAccounts, isAuthenticated, getAccounts);
  router.post(CONFIG.routes.createAccount, isAuthenticated, createAccount);

  return router;
};

export { accountRoute };
