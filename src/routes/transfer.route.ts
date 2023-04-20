import { Router } from 'express';
import { CONFIG } from '../core/configs';
import { isAuthenticated } from '../middleware';
import { createTransfer, getTransfers } from '../services';

const transferRoute = () => {
  const router = Router();

  router.get(CONFIG.routes.getTransfers, isAuthenticated, getTransfers);
  router.post(CONFIG.routes.createTransfer, isAuthenticated, createTransfer);

  return router;
};

export { transferRoute };
