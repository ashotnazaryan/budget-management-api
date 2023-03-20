import passport from 'passport';
import { NextFunction, Request, Response } from 'express';

const CLIENT_URL = process.env.CLIENT_URL || 'http://localhost:3000/';

const loginSuccess = (request: Request, response: Response) => {
  if (request.user) {
    return response.json({ data: request.user });
  }

  return response.redirect('/login/failed');
};

const loginFailed = (request: Request, response: Response) => {
  response.status(401).json({
    message: 'failure',
  });
};

const logout = (request: Request, response: Response, next: NextFunction) => {
  request.logout((error) => {
    if (error) {
      return next(error);
    }

    response.redirect(CLIENT_URL);
  });
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
      return response.redirect('/login/failed');
    }
    request.logIn(user, (error) => {
      if (error) {
        return next(error);
      }

      response.redirect(CLIENT_URL);
    });
  })(request, response, next);
};

export { google, googleCallback, loginSuccess, loginFailed, logout };
