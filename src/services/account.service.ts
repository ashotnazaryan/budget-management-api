import { Request, Response } from 'express';
import { CONFIG } from '../core/configs';
import { Account, AccountInput, DefaultAccount } from '../models';

const getDefaultAccounts = async (request: Request, response: Response) => {
  try {
    const defaultAccounts = await DefaultAccount.find();

    return response.status(200).json({ data: defaultAccounts });
  } catch {
    response.status(200).json({ data: null });
  }
};

const getAccounts = async (request: Request, response: Response) => {
  const userId = (request.user as any)?.userId;

  try {
    const accounts = await Account.find({ userId });

    if (!accounts?.length) {
      return response.redirect(`/api/accounts${CONFIG.routes.getDefaultAccounts}`);
    }

    return response.status(200).json({ data: accounts });
  } catch {
    response.status(200).json({ data: null });
  }
};

const createAccount = async (request: Request<{}, {}, AccountInput>, response: Response) => {
  const userId = (request.user as any)?.userId;
  const newAccount = {...request.body, userId};

  try {
    const defaultAccounts = await DefaultAccount.find();
    const accounts = await Account.find({ userId });
    const accountAvailable = accounts.some((account) => account.userId === userId);
    const defaultAccountsList = defaultAccounts.map((account) => ({
      userId,
      icon: account.icon,
      name: account.name,
      initialAmount: account.initialAmount
    }));

    let newAccounts: AccountInput[] = [];

    if (!accountAvailable) {
      newAccounts = [
        ...defaultAccountsList,
        newAccount
      ];
    }

    const accountCreated = await Account.insertMany(newAccounts);

    return response.status(201).json({ data: accountCreated });
  } catch(error) {
    response.status(500).json({ message: 'Internal server error' });
  }
};

export { getDefaultAccounts, getAccounts, createAccount };
