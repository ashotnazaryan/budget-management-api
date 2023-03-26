import { Router } from 'express';
import { CONFIG } from '../core/configs';
import { isAuthenticated } from '../middleware';
import { getSettings, addSetting } from '../services';

const settingRoute = () => {
  const router = Router();

  router.get(CONFIG.routes.getSettings, isAuthenticated, getSettings);
  router.post(CONFIG.routes.addSetting, isAuthenticated, addSetting);

  return router;
};

export { settingRoute };
