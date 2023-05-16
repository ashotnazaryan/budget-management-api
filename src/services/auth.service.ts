import passport from 'passport';
import { NextFunction, Request, Response } from 'express';
import { CONFIG, GOOGLE_STRATEGY_OPTIONS } from '../core/configs';
import { PassportUser } from '../models';
import { getGoogleAccessToken } from '../helpers';

const loginSuccess = (request: Request, response: Response) => {
  const user = request.user;

  if (user) {
    return response.status(200).json(user);
  }

  response.status(401).redirect(`/api/auth${CONFIG.routes.loginFailed}`);
};

const getNewAccessToken = async (request: Request<unknown, unknown, PassportUser>, response: Response) => {
  const { refreshToken } = request.body;

  try {
    const credentials = await getGoogleAccessToken(refreshToken);

    if (credentials) {
      return response.status(200).json(credentials);
    }
  } catch (error) {
    console.log(error);
  }
};

const loginFailed = (request: Request, response: Response) => {
  response.status(401).json({ message: 'Unauthorized', status: 401 });
};

const logout = (request: Request, response: Response, next: NextFunction) => {
  request.user = undefined;
  request.logout((error) => {
    return next(error);
  });
  response.status(200).json(null);
};

const google = (request: Request, response: Response, next: NextFunction) => {
  passport.authenticate('google',
    {
      accessType: GOOGLE_STRATEGY_OPTIONS.accessType,
      prompt: GOOGLE_STRATEGY_OPTIONS.prompt
    },
    (error: any, user: Express.User) => {
      next(user);
    })(request, response, next);
};

const googleCallback = (request: Request, response: Response, next: NextFunction) => {
  passport.authenticate('google', (error: any, user: Express.User) => {
    if (error) {
      return next(error);
    }

    if (!user) {
      response.status(401).redirect(`/api/auth${CONFIG.routes.loginFailed}`);
    }

    request.logIn(user, (error) => {
      if (error) {
        return next(error);
      }

      response.redirect(CONFIG.clientURL);
    });
  })(request, response, next);
};

const facebook = (request: Request, response: Response, next: NextFunction) => {
  passport.authenticate('facebook',
    {},
    (error: any, user: Express.User) => {
      next(user);
    })(request, response, next);
};

const facebookCallback = (request: Request, response: Response, next: NextFunction) => {
  passport.authenticate('facebook', (error: any, user: Express.User) => {
    if (error) {
      return next(error);
    }

    if (!user) {
      response.status(401).redirect(`/api/auth${CONFIG.routes.loginFailed}`);
    }

    request.logIn(user, (error) => {
      if (error) {
        return next(error);
      }

      response.redirect(CONFIG.clientURL);
    });
  })(request, response, next);
};

export { google, facebook, googleCallback, facebookCallback, loginSuccess, loginFailed, getNewAccessToken, logout };
