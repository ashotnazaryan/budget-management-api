import { Router } from 'express';
import { CONFIG } from '../core/configs';
import { isAuthenticated } from '../middleware';
import { getInvoiceExchangeRates, getRegularExchangeRates } from '../services';

const rateRoute = (): Router => {
  const router = Router();

  router.get(CONFIG.routes.getRegularRates, isAuthenticated, getRegularExchangeRates);
  router.get(CONFIG.routes.getInvoiceRates, isAuthenticated, getInvoiceExchangeRates);

  return router;
};

export { rateRoute };
