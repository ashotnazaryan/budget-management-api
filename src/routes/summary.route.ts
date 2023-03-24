import { Router } from 'express';
import { isAuthenticated } from '../middleware';
import { getSummary } from '../services';

const summaryRoute = () => {
  const router = Router();

  router.get('/getSummary', isAuthenticated, getSummary);

  return router;
};

export { summaryRoute };
