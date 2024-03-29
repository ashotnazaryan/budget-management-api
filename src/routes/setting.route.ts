import { Router } from 'express';
import { CONFIG } from '../core/configs';
import { isAuthenticated } from '../middleware';
import { getSettings, addSetting, reset } from '../services';

const settingRoute = (): Router => {
  const router = Router();

  router.get(CONFIG.routes.getSettings, isAuthenticated, getSettings);
  router.post(CONFIG.routes.addSetting, isAuthenticated, addSetting);
  router.delete(CONFIG.routes.reset, isAuthenticated, reset);

  return router;
};

export { settingRoute };
