import { Router } from 'express';
import { CONFIG } from '../core/configs';
import { isAuthenticated } from '../middleware';
import { getDefaultAccounts, getAccounts, createAccount, getAccountById, editAccount } from '../services';

const accountRoute = () => {
  const router = Router();

  router.get(CONFIG.routes.getDefaultAccounts, isAuthenticated, getDefaultAccounts);
  router.get(CONFIG.routes.getAccounts, isAuthenticated, getAccounts);
  router.post(CONFIG.routes.createAccount, isAuthenticated, createAccount);
  router.get(CONFIG.routes.getAccountById, isAuthenticated, getAccountById);
  router.put(CONFIG.routes.editAccount, isAuthenticated, editAccount);

  return router;
};

export { accountRoute };