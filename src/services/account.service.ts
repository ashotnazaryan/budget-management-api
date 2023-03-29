import { Request, Response } from 'express';
import { DefaultAccount } from '../models';

const getDefaultAccounts = async (request: Request, response: Response) => {
  try {
    const accounts = await DefaultAccount.find();

    return response.status(200).json({ data: accounts });
  } catch {
    response.status(200).json({ data: null });
  }
};

export { getDefaultAccounts };
