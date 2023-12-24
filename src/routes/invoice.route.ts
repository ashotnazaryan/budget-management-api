import { Router } from 'express';
import { CONFIG } from '../core/configs';
import { isAuthenticated } from '../middleware';
import { getInvoices, getInvoiceById, createInvoice, editInvoice, deleteInvoice } from '../services';

const invoiceRoute = (): Router => {
  const router = Router();

  router.get(CONFIG.routes.getInvoices, isAuthenticated, getInvoices);
  router.get(CONFIG.routes.getInvoiceById, isAuthenticated, getInvoiceById);
  router.post(CONFIG.routes.createInvoice, isAuthenticated, createInvoice);
  router.put(CONFIG.routes.editInvoice, isAuthenticated, editInvoice);
  router.delete(CONFIG.routes.deleteInvoice, isAuthenticated, deleteInvoice);

  return router;
};

export { invoiceRoute };
