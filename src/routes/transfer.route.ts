import { Router } from 'express';
import { CONFIG } from '../core/configs';
import { isAuthenticated } from '../middleware';
import { createTransfer, getTransfers, getTransferById, editTransfer, deleteTransfer } from '../services';

const transferRoute = () => {
  const router = Router();

  router.get(CONFIG.routes.getTransfers, isAuthenticated, getTransfers);
  router.post(CONFIG.routes.createTransfer, isAuthenticated, createTransfer);
  router.get(CONFIG.routes.getTransferById, isAuthenticated, getTransferById);
  router.put(CONFIG.routes.editTransfer, isAuthenticated, editTransfer);
  router.delete(CONFIG.routes.deleteTransfer, isAuthenticated, deleteTransfer);

  return router;
};

export { transferRoute };
