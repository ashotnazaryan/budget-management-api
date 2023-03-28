import { NextFunction, Request, Response } from 'express';
import { CONFIG } from '../core/configs';

export const isAuthenticated = (request: Request, response: Response, next: NextFunction) => {
  if (request.isAuthenticated() || request.user) {
    return next();
  }

  response.status(401).redirect(`/api/auth${CONFIG.routes.loginFailed}`);
}
