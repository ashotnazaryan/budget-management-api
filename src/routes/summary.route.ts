import { Router } from 'express';
import { getSummary, addTransaction } from '../services/summary.service';

const summaryRoute = () => {
  const router = Router();

  router.get('/getSummary', getSummary);
  router.post('/addTransaction', addTransaction);

  return router;
};

export { summaryRoute };
