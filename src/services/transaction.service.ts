import { Request, Response } from 'express';
import { Transaction, Account, TransactionDTO, TransactionDocument, CategoryDTO, AccountDTO } from '../models';
import { mapTransaction, mapTransactions } from '../helpers';
import { calculateAccountBalance, updateAccountBalance, updateSummary } from '../services';
import { MAX_TRANSACTIONS_PER_USER, MAX_TRANSACTION_AMOUNT } from '../core/configs';

const getTransactions = async (request: Request<unknown, unknown, unknown, qs.ParsedQs>, response: Response) => {
  const userId = request.user?.userId;
  const { categoryId } = request.query;
  let transactions;

  try {
    if (categoryId) {
      transactions = await Transaction.find({ userId, categoryId }).sort({ createdAt: -1 });
    } else {
      transactions = await Transaction.find({ userId }).sort({ createdAt: -1 });
    }

    return response.status(200).json(mapTransactions(transactions));
  } catch {
    return response.status(500).json({ message: 'Internal server error', status: 500 });
  }
};

const getTransactionById = async (request: Request<{ id: TransactionDTO['id'] }, unknown, TransactionDTO>, response: Response) => {
  const id = request.params.id;

  try {
    const transaction = await Transaction.findById(id);

    if (transaction) {
      return response.status(200).json(mapTransaction(transaction));
    }

    return response.status(404).json({ message: 'Transaction not found', status: 404 });
  } catch {
    return response.status(500).json({ message: 'Internal server error', status: 500 });
  }
};

const createTransaction = async (request: Request<unknown, unknown, TransactionDTO>, response: Response) => {
  const userId = request.user?.userId;

  const { amount, categoryId, name, nameKey, type, icon, accountId, createdAt, note } = request.body;
  const payload = { userId, amount, categoryId, name, nameKey, type, icon, accountId, createdAt, note } as TransactionDTO;

  if (!amount || !categoryId || !name) {
    return response.status(422).json({ message: 'Missing fields', status: 422 });
  }

  if (amount >= MAX_TRANSACTION_AMOUNT) {
    return response.status(422).json({ message: 'Invalid amount', messageKey: 'TRANSACTIONS.ERRORS.INVALID_AMOUNT', status: 422 });
  }

  try {
    const transactions = await Transaction.find({ userId });
    const reachedUserLimit = transactions.length >= MAX_TRANSACTIONS_PER_USER;

    if (reachedUserLimit) {
      return response.status(403).json({ message: 'You have reaced your maximum amount of transactions.', messageKey: 'TRANSACTIONS.ERRORS.REACHED_USER_LIMIT', status: 403 });
    }

    await createUpdateTransaction(payload);

    return response.status(201).json(null);

  } catch {
    return response.status(500).json({ message: 'Internal server error', status: 500 });
  }
};

const editTransaction = async (request: Request<{ id: TransactionDTO['id'] }, unknown, TransactionDTO>, response: Response) => {
  const id = request.params.id;
  const { amount, categoryId, name, nameKey, type, icon, accountId, createdAt, note } = request.body;
  const userId = request.user?.userId;
  const payload = { userId, amount, categoryId, name, nameKey, type, icon, accountId, createdAt, note } as TransactionDTO;

  if (amount >= MAX_TRANSACTION_AMOUNT) {
    return response.status(422).json({ message: 'Invalid amount', messageKey: 'TRANSACTIONS.ERRORS.INVALID_AMOUNT', status: 422 });
  }

  try {
    await createUpdateTransaction(payload, id);

    return response.status(200).json(null);
  } catch {
    return response.status(500).json({ message: 'Internal server error', status: 500 });
  }
};

const deleteTransaction = async (request: Request<{ id: TransactionDTO['id'] }, unknown, unknown>, response: Response) => {
  const id = request.params.id;
  const userId = request.user?.userId;

  if (!userId) {
    return;
  }

  try {
    const transaction = await Transaction.findById(id);

    if (transaction) {
      await Transaction.findByIdAndDelete(id);

      const allUserAccounts = await Account.find({ userId });

      await updateAccountBalance(allUserAccounts, userId);
      await updateSummary(userId);

      return response.status(204).json(null);
    }

    return response.status(404).json({ message: 'Transaction not found', status: 404 });
  } catch {
    return response.status(500).json({ message: 'Internal server error', status: 500 });
  }
};

const createUpdateTransaction = async (payload: TransactionDTO, id?: TransactionDTO['id']) => {
  const { userId, accountId, amount, type } = payload;
  const account = await Account.findById(accountId);

  if (account) {
    const extendedTransaction = {
      ...payload,
      accountName: account?.name,
      accountIcon: account?.icon,
      accountNameKey: account?.nameKey,
      currencyIso: account?.currencyIso
    } as TransactionDocument;

    const mappedTransaction = mapTransaction(extendedTransaction);

    if (!id) {
      await Transaction.create(mappedTransaction);
      await calculateAccountBalance(account, amount, type, 'create');
    } else {
      const oldTransaction = mapTransaction(await Transaction.findById(id) as TransactionDocument);
      await Transaction.findByIdAndUpdate(id, mappedTransaction);
      await calculateAccountBalance(account, amount, type, 'edit', userId, oldTransaction);
    }
  }

  await updateSummary(userId);
};

const updateCategoryTransactions = async (userId: string, categoryId: CategoryDTO['id'], category: CategoryDTO): Promise<void> => {
  await Transaction.updateMany({ userId, categoryId },
    {
      $set: {
        name: category.name,
        icon: category.icon
      }
    });
};

const updateAccountTransactions = async (userId: string, accountId: AccountDTO['id'], account: Pick<AccountDTO, 'name' | 'icon'>): Promise<void> => {
  await Transaction.updateMany({ userId, accountId },
    {
      $set: {
        accountName: account.name,
        accountIcon: account.icon
      }
    });
};

const deleteCategoryTransactions = async (userId: string, categoryId: CategoryDTO['id']): Promise<void> => {
  await Transaction.deleteMany({ userId, categoryId });
};

const deleteAccountTransactions = async (userId: string, accountId: AccountDTO['id']): Promise<void> => {
  await Transaction.deleteMany({ userId, accountId });
};

export {
  getTransactions,
  getTransactionById,
  createTransaction,
  editTransaction,
  deleteTransaction,
  updateCategoryTransactions,
  updateAccountTransactions,
  deleteAccountTransactions,
  deleteCategoryTransactions
};
