import { Router } from 'express';
import { CONFIG } from '../core/configs';
import { google, googleCallback, loginFailed, loginSuccess, logout } from '../services';

const authRoute = () => {
  const router = Router();

  router.get(CONFIG.routes.loginSuccess, loginSuccess);
  router.get(CONFIG.routes.loginFailed, loginFailed);
  router.get(CONFIG.routes.logout, logout);
  router.get(CONFIG.routes.google, google);
  router.get(CONFIG.routes.googleCallback, googleCallback);

  return router;
};

export { authRoute };
