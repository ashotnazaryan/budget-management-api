import { Request, Response } from 'express';
import { Account, AccountDocument, AccountInput, CategoryType, DefaultAccount, Transaction, TransactionInput } from '../models';
import { calculateAmountByField, calculateTransactionsAmount, mapAccounts } from '../helpers';
import { deleteAccountTransactions, updateAccountTransactions, updateSummary } from '../services';

const getAccounts = async (request: Request, response: Response) => {
  const userId = request.user!.userId;

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

const getAccountById = async (request: Request<{ id: AccountInput['id'] }, {}, AccountInput>, response: Response) => {
  const id = request.params.id;

  try {
    const account = await Account.findById(id);

    if (account) {
      return response.status(200).json({ data: account });
    }

    return response.status(404).json({ error: { message: 'Account not found', status: 404 } });
  } catch {
    return response.status(500).json({ error: { message: 'Internal server error', status: 500 } });
  }
};

const createAccount = async (request: Request<{}, {}, AccountInput>, response: Response) => {
  const userId = request.user!.userId;
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

    return response.status(409).json({ error: { message: 'Account already exists', messageKey: 'ACCOUNTS.ERRORS.ACCOUNT_EXISTS', status: 409 } });

  } catch (error) {
    return response.status(500).json({ error: { message: 'Internal server error', status: 500 } });
  }
};

const editAccount = async (request: Request<{ id: AccountInput['id'] }, {}, AccountInput>, response: Response) => {
  const id = request.params.id;
  let updatedAccount = request.body;
  const userId = request.user!.userId;

  try {
    const accounts = await Account.find({ userId });
    const accountAvailable = accounts.some((item) => item.name === updatedAccount.name && item.id !== id);

    if (accountAvailable) {
      return response.status(409).json({ error: { message: 'Account already exists', messageKey: 'ACCOUNTS.ERRORS.ACCOUNT_EXISTS', status: 409 } });
    }

    const account = await Account.findById(id);

    if (account) {
      const balanceDiff = updatedAccount.balance - account.balance;

      updatedAccount = {
        ...updatedAccount,
        balance: account.balance + balanceDiff
      };

      await Account.findByIdAndUpdate(id, updatedAccount);
      await updateAccountTransactions(userId, id, updatedAccount);

      return response.status(200).json({ data: null });
    }

    return response.status(404).json({ error: { message: 'Account not found', status: 404 } });
  } catch {
    return response.status(500).json({ error: { message: 'Internal server error', status: 500 } });
  }
};

const deleteAccount = async (request: Request<{ id: AccountInput['id'] }, {}, {}>, response: Response) => {
  const id = request.params.id;
  const userId = request.user!.userId;

  try {
    const account = await Account.findById(id);

    if (account) {
      await Account.findByIdAndDelete(id);
      await deleteAccountTransactions(userId, id);
      await updateSummary(userId);

      return response.status(204).json({ data: null });
    }

    return response.status(404).json({ error: { message: 'Account not found', status: 404 } });
  } catch {
    return response.status(500).json({ error: { message: 'Internal server error', status: 500 } });
  }
};

const calculateAccountBalance = async (
  accountId: AccountInput['id'],
  amount: number,
  type: CategoryType,
  mode: 'create' | 'edit',
  userId?: string,
  oldTransaction?: TransactionInput
): Promise<void> => {
  const account = await Account.findById(accountId);

  if (account) {
    let balance = account.balance;

    if (mode === 'create') {
      balance = type === CategoryType.expense ? account.balance - amount : account.balance + amount;
    } else if (mode === 'edit') {
      const accountTransactions = await Transaction.find({ userId, accountId });
      const oldAccountTransactions = await Transaction.find({ userId, accountId: oldTransaction!.accountId });
      const oldAccountBalance = calculateTransactionsAmount(oldAccountTransactions);
      await Account.findByIdAndUpdate(oldTransaction?.accountId, { balance: oldAccountBalance });
      balance = calculateTransactionsAmount(accountTransactions);
    }

    await Account.findByIdAndUpdate(accountId, { balance });
  }
};

const calculateAccountsTotalBalance = async (userId: string): Promise<number> => {
  const userAccounts = await Account.find({ userId });

  // TODO: use parseInt(balance.toFixed(2))
  return calculateAmountByField(userAccounts, 'balance');
};

const updateAccountBalance = async (accounts: AccountDocument[], userId: string): Promise<void> => {
  for (const account of accounts) {
    const accountTransactions = await Transaction.find({ userId, accountId: account.id });
    const accountTransactionsAmount = calculateTransactionsAmount(accountTransactions);

    await Account.findByIdAndUpdate(account.id, { balance: accountTransactionsAmount });
  }
}

export {
  getAccounts,
  createAccount,
  getAccountById,
  editAccount,
  deleteAccount,
  calculateAccountBalance,
  updateAccountBalance,
  calculateAccountsTotalBalance,
};
