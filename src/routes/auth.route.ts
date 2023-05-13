import { Router } from 'express';
import { CONFIG } from '../core/configs';
import { google, facebook, googleCallback, facebookCallback, loginFailed, loginSuccess, getNewAccessToken, logout } from '../services';

const authRoute = () => {
  const router = Router();

  router.get(CONFIG.routes.loginSuccess, loginSuccess);
  router.get(CONFIG.routes.loginFailed, loginFailed);
  router.post(CONFIG.routes.accessToken, getNewAccessToken);
  router.get(CONFIG.routes.logout, logout);
  router.get(CONFIG.routes.google, google);
  router.get(CONFIG.routes.googleCallback, googleCallback);
  router.get(CONFIG.routes.facebook, facebook);
  router.get(CONFIG.routes.facebookCallback, facebookCallback);

  return router;
};

export { authRoute };
