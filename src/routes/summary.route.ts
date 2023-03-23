import { Router } from 'express';
import { loggedIn } from '../middleware/auth.middleware';
import { getSummary } from '../services/summary.service';

const summaryRoute = () => {
  const router = Router();

  router.get('/getSummary', loggedIn, getSummary);

  return router;
};

export { summaryRoute };
