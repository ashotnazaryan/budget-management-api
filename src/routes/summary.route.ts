import { Router } from 'express';
import { loggedIn } from '../middleware';
import { getSummary } from '../services';

const summaryRoute = () => {
  const router = Router();

  router.get('/getSummary', loggedIn, getSummary);

  return router;
};

export { summaryRoute };
