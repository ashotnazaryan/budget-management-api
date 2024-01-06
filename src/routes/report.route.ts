import { Router } from 'express';
import { CONFIG } from '../core/configs';
import { isAuthenticated } from '../middleware';
import { getReports } from '../services';

const reportRoute = (): Router => {
  const router = Router();

  router.get(CONFIG.routes.getReports, isAuthenticated, getReports);

  return router;
};

export { reportRoute };
