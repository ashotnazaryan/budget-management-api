import passport from 'passport';
import { NextFunction, Request, Response } from 'express';
import { CONFIG } from '../core/configs';

const loginSuccess = (request: Request, response: Response) => {
  const user = request.user;

  if (user) {
    return response.json({ data: user });
  }

  response.status(401).redirect(`/api/auth/${CONFIG.routes.loginFailed}`);
};

const loginFailed = (request: Request, response: Response) => {
  response.status(401).json({
    message: 'Unauthorized',
  });
};

const logout = (request: Request, response: Response, next: NextFunction) => {
  request.session.destroy((error) => {
    if (error) {
      return next(error);
    }
  });
  request.logout((error) => {
    return next(error);
  });
  response.status(200).json({ data: null });
};

const google = (request: Request, response: Response, next: NextFunction) => {
  passport.authenticate('google',
    (error: any, user: Express.User) => {
      next(user);
    })(request, response, next);
};

const googleCallback = (request: Request, response: Response, next: NextFunction) => {
  passport.authenticate('google', {
  }, (error, user) => {
    if (error) {
      return next(error);
    }
    if (!user) {
      response.status(401).redirect(`/api/auth/${CONFIG.routes.loginFailed}`);
    }
    request.logIn(user, (error) => {
      if (error) {
        return next(error);
      }

      response.redirect(CONFIG.clientUrl);
    });
  })(request, response, next);
};

export { google, googleCallback, loginSuccess, loginFailed, logout };
