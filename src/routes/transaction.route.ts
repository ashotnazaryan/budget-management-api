import { Router } from 'express';
import { CONFIG } from '../core/configs';
import { isAuthenticated } from '../middleware';
import { getTransactions, addTransaction } from '../services';

const transactionRoute = () => {
  const router = Router();

  router.get(CONFIG.routes.getTransactions, isAuthenticated, getTransactions);
  router.post(CONFIG.routes.addTransaction, isAuthenticated, addTransaction);

  return router;
};

export { transactionRoute };
