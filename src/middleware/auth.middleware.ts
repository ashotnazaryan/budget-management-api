import { NextFunction, Request, Response } from 'express';

export const isAuthenticated = (request: Request, response: Response, next: NextFunction) => {
  if (request.isAuthenticated()) {
    return next();
  }

  response.redirect('/api/auth/login/failed');
}
