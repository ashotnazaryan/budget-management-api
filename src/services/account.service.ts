import { Request, Response } from 'express';
import { Account, AccountDocument, AccountDTO, CategoryType, DefaultAccount, Setting, Transaction, TransactionDTO } from '../models';
import { calculateAmountByField, calculateTransactionsAmount, mapAccount, mapAccounts } from '../helpers';
import { deleteAccountTransactions, deleteAccountTransfers, updateAccountTransactions, updateSummary } from '../services';
import { MAX_ACCOUNTS_PER_USER } from '../core/configs';

const ensureDefaultAccounts = async (userId: string): Promise<void> => {
  const count = await Account.countDocuments({ userId });

  if (count > 0) {
    return;
  }

  const defaultAccounts = mapAccounts(await DefaultAccount.find(), userId);
  await Account.insertMany(defaultAccounts);
};

const getAccounts = async (request: Request, response: Response) => {
  const userId = request.user?.userId;

  if (!userId) {
    return;
  }

  try {
    await ensureDefaultAccounts(userId);
    const accounts = await Account.find({ userId });

    return response.status(200).json(mapAccounts(accounts, userId));
  } catch {
    return response.status(500).json({ message: 'Internal server error', status: 500 });
  }
};

const getAccountById = async (request: Request<{ id: AccountDTO['id'] }, unknown, AccountDTO>, response: Response) => {
  const id = request.params.id;
  const userId = request.user?.userId;

  if (!userId) {
    return;
  }

  try {
    const account = await Account.findById(id);

    if (account) {
      return response.status(200).json(mapAccount(account, userId));
    }

    return response.status(404).json({ message: 'Account not found', status: 404 });
  } catch {
    return response.status(500).json({ message: 'Internal server error', status: 500 });
  }
};

const createAccount = async (request: Request<unknown, unknown, AccountDTO>, response: Response) => {
  const userId = request.user?.userId;
  const newAccount: AccountDTO = {
    ...request.body,
    userId,
    isDefaultAccount: false
  };

  try {
    const accounts = await Account.find({ userId });
    const reachedUserLimit = accounts.length >= MAX_ACCOUNTS_PER_USER;

    if (reachedUserLimit) {
      return response.status(403).json({ message: 'You have reaced your maximum amount of accounts.', messageKey: 'ACCOUNTS.ERRORS.REACHED_USER_LIMIT', status: 403 });
    }

    const accountAvailable = accounts.some((account) => account.name === newAccount.name);

    if (!accountAvailable) {
      await Account.create(newAccount);

      return response.status(201).json(null);
    }

    return response.status(409).json({ message: 'Account already exists', messageKey: 'ACCOUNTS.ERRORS.ACCOUNT_EXISTS', status: 409 });

  } catch (error) {
    return response.status(500).json({ message: 'Internal server error', status: 500 });
  }
};

const editAccount = async (request: Request<{ id: AccountDTO['id'] }, unknown, AccountDTO>, response: Response) => {
  const id = request.params.id;
  let updatedAccount = request.body;
  const userId = request.user?.userId;

  try {
    const accounts = await Account.find({ userId });
    const accountAvailable = accounts.some((item) => item.name === updatedAccount.name && item.id !== id);

    if (accountAvailable) {
      return response.status(409).json({ message: 'Account already exists', messageKey: 'ACCOUNTS.ERRORS.ACCOUNT_EXISTS', status: 409 });
    }

    const account = await Account.findById(id);

    if (account && userId) {
      const balanceDiff = updatedAccount.balance - account.balance;

      updatedAccount = {
        ...updatedAccount,
        nameKey: account.name === updatedAccount.name ? account.nameKey : '',
        balance: account.balance + balanceDiff
      };

      await Account.findByIdAndUpdate(id, updatedAccount);
      await updateAccountTransactions(userId, id, updatedAccount);

      return response.status(200).json(null);
    }

    return response.status(404).json({ message: 'Account not found', status: 404 });
  } catch {
    return response.status(500).json({ message: 'Internal server error', status: 500 });
  }
};

const deleteAccount = async (request: Request<{ id: AccountDTO['id'] }, unknown, unknown>, response: Response) => {
  const id = request.params.id;
  const userId = request.user?.userId;

  if (!userId) {
    return;
  }

  try {
    const account = await Account.findById(id);
    const userSetting = await Setting.findOne({ userId });

    if (userSetting?.defaultAccount === id) {
      return response.status(403).json({ message: 'You cannot delete the default account', messageKey: 'ACCOUNTS.ERRORS.DELETE_DEFAULT_ACCOUNT', status: 403 });
    }

    if (account) {
      await Account.findByIdAndDelete(id);
      await deleteAccountTransactions(userId, id);
      await deleteAccountTransfers(userId, id);
      await updateSummary(userId);

      return response.status(204).json(null);
    }

    return response.status(404).json({ message: 'Account not found', status: 404 });
  } catch {
    return response.status(500).json({ message: 'Internal server error', status: 500 });
  }
};

const calculateAccountBalance = async (
  account: AccountDocument,
  amount: number,
  type: CategoryType,
  mode: 'create' | 'edit',
  userId?: string,
  oldTransaction?: TransactionDTO
): Promise<void> => {
  if (account) {
    let balance = account.balance;
    const accountId = account.id;

    if (mode === 'create') {
      balance = type === CategoryType.expense ? account.balance - amount : account.balance + amount;
    } else if (mode === 'edit') {
      const accountTransactions = await Transaction.find({ userId, accountId });
      const oldAccountTransactions = await Transaction.find({ userId, accountId: oldTransaction?.accountId });
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
};

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
