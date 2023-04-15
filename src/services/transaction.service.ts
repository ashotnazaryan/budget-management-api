import { Request, Response } from 'express';
import { Summary, Transaction, Account, TransactionInput, TransactionDocument, CategoryInput, AccountInput } from '../models';
import { calculateAmountByField, mapTransaction, mapTransactions } from '../helpers';
import { calculateAccountBalance, syncSummary } from '../services';

const getTransactions = async (request: Request, response: Response) => {
  const userId = (request.user as any)?.userId;
  try {
    const transactions = await Transaction.find({ userId }).sort({ createdAt: -1 });

    return response.status(200).json({ data: mapTransactions(transactions) });
  } catch {
    response.status(200).json({ data: null });
  }
};

const getTransactionById = async (request: Request<{ id: TransactionInput['id'] }, {}, TransactionInput>, response: Response) => {
  const id = request.params.id
  try {
    const transaction = await Transaction.findById(id);

    if (transaction) {
      return response.status(200).json({ data: mapTransaction(transaction) });
    }

    return response.status(404).json({ error: { message: 'Transaction not found', status: 404 } });
  } catch {
    return response.status(500).json({ error: { message: 'Internal server error', status: 500 } });
  }
};

const addTransaction = async (request: Request<{}, {}, TransactionInput>, response: Response) => {
  const { amount, categoryId, name, nameKey, currencyIso, type, icon, accountId, createdAt } = request.body;
  const userId = (request.user as any)?.userId;
  const payload = { userId, amount, currencyIso, categoryId, name, nameKey, type, icon, accountId, createdAt } as TransactionInput;

  if (!amount || !categoryId || !name) {
    return response.status(422).json({ error: { message: 'Missing fields', status: 422 } });
  }

  try {
    await createOrUpdateTransaction(payload);

    return response.status(201).json({ data: null });

  } catch {
    return response.status(500).json({ error: { message: 'Internal server error', status: 500 } });
  }
};

const editTransaction = async (request: Request<{ id: TransactionInput['id'] }, {}, TransactionInput>, response: Response) => {
  const id = request.params.id;
  const { amount, currencyIso, categoryId, name, nameKey, type, icon, accountId, createdAt } = request.body;
  const userId = (request.user as any)?.userId;
  const payload = { userId, amount, currencyIso, categoryId, name, nameKey, type, icon, accountId, createdAt } as TransactionInput;

  try {
    await createOrUpdateTransaction(payload, id);

    return response.status(200).json({ data: null });
  } catch {
    return response.status(500).json({ error: { message: 'Internal server error', status: 500 } });
  }
};

const createOrUpdateTransaction = async (payload: TransactionInput, id?: TransactionInput['id']) => {
  const { userId, accountId, amount, type } = payload;

  const account = await Account.findById(payload.accountId);
  const extendedTransaction = {
    ...payload,
    accountName: account?.name,
    accountIcon: account?.icon
  } as TransactionDocument;
  const mappedTransaction = mapTransaction(extendedTransaction);

  if (!id) {
    await Transaction.create(mappedTransaction);
    await calculateAccountBalance(accountId, amount, type, 'create');
  } else {
    const oldTransaction = mapTransaction(await Transaction.findById(id) as TransactionDocument);
    await Transaction.findByIdAndUpdate(id, mappedTransaction);
    await calculateAccountBalance(accountId, amount, type, 'edit', userId, oldTransaction);
  }

  const result = await syncSummary(userId);

  await Summary.findOneAndUpdate({ userId }, {
    $set: {
      incomes: result.incomes,
      expenses: result.expenses,
      balance: result.balance,
      categoryExpenseTransactions: result.categoryExpenseTransactions,
      categoryIncomeTransactions: result.categoryIncomeTransactions
    }
  });
};

const calculateSummaryBalance = async (userId: string): Promise<number> => {
  const userAccounts = await Account.find({ userId });

  // TODO: use parseInt(balance.toFixed(2))
  return calculateAmountByField(userAccounts, 'balance');
};

const updateCategoryTransactions = async (userId: string, categoryId: string, category: CategoryInput): Promise<void> => {
  await Transaction.updateMany({ userId, categoryId },
    {
      $set: {
        name: category.name,
        icon: category.icon
      }
    });
};

const updateAccountTransactions = async (userId: string, accountId: string, account: Pick<AccountInput, 'name' | 'icon'>): Promise<void> => {
  await Transaction.updateMany({ userId, accountId },
    {
      $set: {
        accountName: account.name,
        accountIcon: account.icon
      }
    });
};

export {
  getTransactions,
  getTransactionById,
  addTransaction,
  editTransaction,
  calculateSummaryBalance,
  updateCategoryTransactions,
  updateAccountTransactions
};
