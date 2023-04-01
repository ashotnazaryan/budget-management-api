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
  const newAccount = { ...request.body, userId };

  try {
    const defaultAccounts = await DefaultAccount.find();
    const accounts = await Account.find({ userId });
    const accountAvailable = accounts.some((account) => account.name === newAccount.name);
    const defaultAccountList: AccountInput[] = defaultAccounts.map((account) => ({
      userId,
      icon: account.icon,
      name: account.name,
      currencyIso: account.currencyIso,
      initialAmount: account.initialAmount
    }));

    if (!accounts.length) {
      await Account.insertMany([
        ...defaultAccountList,
        newAccount
      ]);

      return response.status(201).json({ data: null });
    }

    if (!accountAvailable) {
      await Account.create(newAccount);

      return response.status(201).json({ data: null });
    }

    return response.status(400).json({ error: { message: 'Account already exists', status: 400 } });

  } catch (error) {
    response.status(500).json({ error: { message: 'Internal server error', status: 500 } });
  }
};

export { getDefaultAccounts, getAccounts, createAccount };
