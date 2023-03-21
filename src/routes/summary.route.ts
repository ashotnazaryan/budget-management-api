import { Router } from 'express';
import { loggedIn } from '../middleware/auth.middleware';
import { getSummary, addTransaction } from '../services/summary.service';

const summaryRoute = () => {
  const router = Router();

  router.get('/getSummary', loggedIn, getSummary);
  router.post('/addTransaction', loggedIn, addTransaction);

  return router;
};

export { summaryRoute };
