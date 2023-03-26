import { Router } from 'express';
import { CONFIG } from '../core/configs';
import { isAuthenticated } from '../middleware';
import { getSummary, getBalanceInfo } from '../services';

const summaryRoute = () => {
  const router = Router();

  router.get(CONFIG.routes.getSummary, isAuthenticated, getSummary);
  router.get(CONFIG.routes.getBalance, isAuthenticated, getBalanceInfo);

  return router;
};

export { summaryRoute };
