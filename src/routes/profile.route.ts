import { Router } from 'express';
import { CONFIG } from '../core/configs';
import { isAuthenticated } from '../middleware';
import { getProfile, editProfile } from '../services';

const profileRoute = (): Router => {
  const router = Router();

  router.get(CONFIG.routes.getProfile, isAuthenticated, getProfile);
  router.put(CONFIG.routes.editProfile, isAuthenticated, editProfile);

  return router;
};

export { profileRoute };
