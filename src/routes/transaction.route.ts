import { Router } from 'express';
import { isAuthenticated } from '../middleware';
import { getTransactions, addTransaction } from '../services';

const transactionRoute = () => {
  const router = Router();

  router.get('/getTransactions', isAuthenticated, getTransactions);
  router.post('/addTransaction', isAuthenticated, addTransaction);

  return router;
};

export { transactionRoute };
