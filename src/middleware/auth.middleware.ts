import { NextFunction, Request, Response } from 'express';

export const loggedIn = (request: Request, response: Response, next: NextFunction) => {
  if (request.user) {
    return next();
  } else {
    response.redirect('/api/auth/login/failed');
  }
}
