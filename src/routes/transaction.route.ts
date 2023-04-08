import { Router } from 'express';
import { CONFIG } from '../core/configs';
import { isAuthenticated } from '../middleware';
import { getTransactions, addTransaction, getTransactionById, editTransaction } from '../services';

const transactionRoute = () => {
  const router = Router();

  router.get(CONFIG.routes.getTransactions, isAuthenticated, getTransactions);
  router.get(CONFIG.routes.getTransactionById, isAuthenticated, getTransactionById);
  router.post(CONFIG.routes.addTransaction, isAuthenticated, addTransaction);
  router.put(CONFIG.routes.editTransaction, isAuthenticated, editTransaction);

  return router;
};

export { transactionRoute };
