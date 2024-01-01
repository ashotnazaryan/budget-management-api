import { Router } from 'express';
import { CONFIG } from '../core/configs';
import { getInvoiceExchangeRates, getRegularExchangeRates } from '../services';

const rateRoute = (): Router => {
  const router = Router();

  router.get(CONFIG.routes.getRegularRates, getRegularExchangeRates);
  router.get(CONFIG.routes.getInvoiceRates, getInvoiceExchangeRates);

  return router;
};

export { rateRoute };
