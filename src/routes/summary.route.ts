import { Router } from 'express';
import { getSummary } from '../services/summary.service';

const summaryRoute = () => {
  const router = Router();

  router.get('/getSummary', getSummary);

  return router;
};

export { summaryRoute };

