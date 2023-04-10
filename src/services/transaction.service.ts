import { Request, Response } from 'express';
import { Summary, Transaction, Account, TransactionInput, TransactionDocument, CategoryInput, AccountInput } from '../models';
import { calculateAmountByField, mapTransaction, mapTransactions } from '../helpers';
import { calculateAccountBalance, calculateSummary } from '../services';

const getTransactions = async (request: Request, response: Response) => {
  const userId = (request.user as any)?.userId;
  try {
    const transactions = await Transaction.find({ userId }).sort({ createdAt: -1 });
    const mappedTransactions = mapTransactions(transactions);

    return response.status(200).json({ data: mappedTransactions });
  } catch {
    response.status(200).json({ data: null });
  }
};

const getTransactionById = async (request: Request<{ transactionId: string }, {}, TransactionInput>, response: Response) => {
  const transactionId = request.params.transactionId;

  try {
    const transaction = await Transaction.findById(transactionId);

    if (transaction) {
      return response.status(200).json({ data: transaction });
    }

    return response.status(404).json({ error: { message: 'Transaction not found', status: 404 } });
  } catch {
    return response.status(500).json({ error: { message: 'Internal server error', status: 500 } });
  }
};

const addTransaction = async (request: Request<{}, {}, TransactionInput>, response: Response) => {
  const { amount, categoryId, name, type, icon, accountId } = request.body;
  const userId = (request.user as any)?.userId;
  const payload = { userId, amount, categoryId, name, type, icon, accountId, createdAt: new Date() } as TransactionInput;

  if (!amount || !categoryId || !name) {
    return response.status(422).json({ error: { message: 'Missing fields', status: 422 } });
  }

  try {
    await createTransaction({ ...payload, userId });
    const result = await calculateSummary('create', payload);

    await Summary.findOneAndUpdate({ userId }, {
      $set: {
        incomes: result.incomes,
        expenses: result.expenses,
        balance: result.balance,
        categoryExpenseTransactions: result.categoryExpenseTransactions,
        categoryIncomeTransactions: result.categoryIncomeTransactions
      }
    });

    await calculateAccountBalance(accountId, amount, type, 'create');

    return response.status(201).json({ data: null });

  } catch {
    return response.status(500).json({ error: { message: 'Internal server error', status: 500 } });
  }
};

const editTransaction = async (request: Request<{ transactionId: string }, {}, TransactionInput>, response: Response) => {
  const transactionId = request.params.transactionId;
  const transaction = request.body;
  const userId = (request.user as any)?.userId;
  const { amount, categoryId, name, type, icon, accountId } = request.body;
  const payload = { userId, amount, categoryId, name, type, icon, accountId } as TransactionInput;

  try {
    await Transaction.findByIdAndUpdate(transactionId, transaction);
    await calculateAccountBalance(accountId, amount, type, 'edit', userId);
    const result = await calculateSummary('edit', payload);

    // TODO: try Summary.findByIdAndUpdate({ userId }, result);
    await Summary.findOneAndUpdate({ userId }, {
      $set: {
        incomes: result.incomes,
        expenses: result.expenses,
        balance: result.balance,
        categoryExpenseTransactions: result.categoryExpenseTransactions,
        categoryIncomeTransactions: result.categoryIncomeTransactions
      }
    });

    return response.status(200).json({ data: null });
  } catch {
    return response.status(500).json({ error: { message: 'Internal server error', status: 500 } });
  }
};

const calculateSummaryBalance = async (userId: string): Promise<number> => {
  const userAccounts = await Account.find({ userId });

  // TODO: use parseInt(balance.toFixed(2))
  return calculateAmountByField(userAccounts, 'balance');
};

const createTransaction = async (transaction: TransactionInput & { userId: string }) => {
  const account = await Account.findById(transaction.accountId);
  const extendedTransaction = {
    ...transaction,
    accountName: account?.name,
    accountIcon: account?.icon
  } as TransactionDocument;

  const mappedTransaction = mapTransaction(extendedTransaction);
  await Transaction.create(mappedTransaction);
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
