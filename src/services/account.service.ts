import { Request, Response } from 'express';
import { CONFIG } from '../core/configs';
import { Account, AccountInput, DefaultAccount } from '../models';
import { mapAccounts } from '../helpers';
import { updateAccountTransactions } from './transaction.service';

const getAccounts = async (request: Request, response: Response) => {
  const userId = (request.user as any)?.userId;

  try {
    let accounts = await Account.find({ userId });
    let mappedAccounts = mapAccounts(accounts, userId);

    if (accounts.length) {
      return response.status(200).json({ data: mappedAccounts });
    }

    const defaultAccounts = await DefaultAccount.find();
    const defaultAccountList: AccountInput[] = mapAccounts(defaultAccounts, userId);
    await Account.insertMany(defaultAccountList);
    accounts = await Account.find({ userId });
    mappedAccounts = mapAccounts(accounts, userId);

    return response.status(200).json({ data: mappedAccounts });
  } catch {
    return response.status(200).json({ data: null });
  }
};

const getAccountById = async (request: Request, response: Response) => {
  const accountId = request.params.accountId;

  try {
    const account = await Account.findById(accountId);

    if (account) {
      return response.status(200).json({ data: account });
    }

    return response.status(404).json({ error: { message: 'Account not found', status: 404 } });
  } catch {
    return response.status(500).json({ error: { message: 'Internal server error', status: 500 } });
  }
};

const createAccount = async (request: Request<{}, {}, AccountInput>, response: Response) => {
  const userId = (request.user as any)?.userId;
  const newAccount: AccountInput = {
    ...request.body,
    userId,
    isDefaultAccount: false
  };

  try {
    const accounts = await Account.find({ userId });
    const accountAvailable = accounts.some((account) => account.name === newAccount.name);

    if (!accountAvailable) {
      await Account.create(newAccount);

      return response.status(201).json({ data: null });
    }

    return response.status(409).json({ error: { message: 'Account already exists', status: 409 } });

  } catch (error) {
    return response.status(500).json({ error: { message: 'Internal server error', status: 500 } });
  }
};

const editAccount = async (request: Request<{ accountId: string }, {}, AccountInput>, response: Response) => {
  const accountId = request.params.accountId;
  let updatedAccount = request.body;
  const userId = (request.user as any)?.userId;

  try {
    const accounts = await Account.find({ userId });
    const accountAvailable = accounts.some((item) => item.name === updatedAccount.name);

    if (accountAvailable) {
      return response.status(409).json({ error: { message: 'Account already exists', status: 409 } });
    }

    const account = await Account.findById(accountId);

    if (account) {
      const balanceDiff = updatedAccount.balance - account.balance;

      updatedAccount = {
        ...updatedAccount,
        balance: account.balance + balanceDiff
      };

      await Account.findByIdAndUpdate(accountId, updatedAccount);
      await updateAccountTransactions(userId, accountId, updatedAccount);

      return response.status(200).json({ data: null });
    }

    return response.status(404).json({ error: { message: 'Account not found', status: 404 } });
  } catch {
    return response.status(500).json({ error: { message: 'Internal server error', status: 500 } });
  }
};

export { getAccounts, createAccount, getAccountById, editAccount };
