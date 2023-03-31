import { NextFunction, Request, Response } from 'express';

export const setResponseHeaders = (request: Request, response: Response, next: NextFunction): void => {
  response.setHeader('Content-Type', 'application/json; charset=utf-8');
  next();
};
