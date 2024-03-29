import { Router } from 'express';
import { CONFIG } from '../core/configs';
import { isAuthenticated } from '../middleware';
import { getAccounts, getAccountById, createAccount, editAccount, deleteAccount } from '../services';

const accountRoute = (): Router => {
  const router = Router();

  router.get(CONFIG.routes.getAccounts, isAuthenticated, getAccounts);
  router.get(CONFIG.routes.getAccountById, isAuthenticated, getAccountById);
  router.post(CONFIG.routes.createAccount, isAuthenticated, createAccount);
  router.put(CONFIG.routes.editAccount, isAuthenticated, editAccount);
  router.delete(CONFIG.routes.deleteAccount, isAuthenticated, deleteAccount);

  return router;
};

export { accountRoute };
