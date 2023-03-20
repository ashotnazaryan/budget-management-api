import { Router } from 'express';
import { google, googleCallback, loginFailed, loginSuccess, logout } from '../services/auth.service';

const authRoute = () => {
  const router = Router();

  router.get('/login/success', loginSuccess);
  router.get('/login/failed', loginFailed);
  router.get('/logout', logout);
  router.get('/google', google);
  router.get('/google/callback', googleCallback);

  return router;
};

export { authRoute };
