import { Router } from 'express';
import { loggedIn } from '../middleware';
import { getTransactions, addTransaction } from '../services';

const transactionRoute = () => {
  const router = Router();

  router.get('/getTransactions', loggedIn, getTransactions);
  router.post('/addTransaction', loggedIn, addTransaction);

  return router;
};

export { transactionRoute };
