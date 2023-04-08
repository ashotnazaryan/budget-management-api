import { Request, Response } from 'express';
import { Summary, Transaction, CategoryType, TransactionRequestRequestDTO, Account, TransactionInput, TransactionDocument, CategoryInput, AccountInput } from '../models';
import { mapCategoryTransaction, mapTransaction, mapTransactions } from '../helpers';
import { calculateSummary } from './summary.service';

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

const getTransactionById = async (request: Request, response: Response) => {
  // TODO: set request param types
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

const addTransaction = async (request: Request<{}, {}, TransactionRequestRequestDTO>, response: Response) => {
  const { amount, categoryId, name, type, icon, accountId } = request.body;
  const userId = (request.user as any)?.userId;

  if (!amount || !categoryId || !name) {
    return response.status(422).json({ error: { message: 'Missing fields', status: 422 } });
  }

  const payload = { amount, categoryId, name, type, icon, accountId, createdAt: new Date() } as TransactionInput;

  try {
    await createTransaction({ ...payload, userId } as TransactionInput);
    const result = await calculateSummary(payload, userId);
    await Summary.findOneAndUpdate({ userId }, {
      $set: {
        incomes: result.incomes,
        expenses: result.expenses,
        balance: result.balance,
        categoryExpenseTransactions: result.categoryExpenseTransactions,
        categoryIncomeTransactions: result.categoryIncomeTransactions
      }
    });

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
  const payload = { amount, categoryId, name, type, icon, accountId } as TransactionInput;

  try {
    await Transaction.findByIdAndUpdate(transactionId, transaction);
    const result = await calculateSummary(payload, userId);
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

const calculateAccountBalance = async (accountId: string, amount: number, type: CategoryType): Promise<void> => {
  const account = await Account.findById(accountId);

  if (account) {
    const balance = type === CategoryType.income ? account.balance + amount : account.balance - amount;

    await Account.findByIdAndUpdate(accountId, { balance });
  }
};

const calculateSummaryBalance = async (userId: string): Promise<number> => {
  const userAccounts = await Account.find({ userId });

  if (userAccounts.length) {
    return userAccounts.reduce<number>((acc, curr) => {
      return acc + curr.balance;
    }, 0);
  }

  return 0;
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

const updateSummaryCategoryTransactions = async (userId: string, categoryId: string, category: CategoryInput): Promise<void> => {
  const summary = await Summary.findOne({ userId });

  const categoryTransactions = category.type === CategoryType.expense
    ? summary?.categoryExpenseTransactions.map((transaction) => {
      return transaction.categoryId === categoryId
        ? mapCategoryTransaction(transaction, category)
        : transaction
    })
    : summary?.categoryIncomeTransactions.map((transaction) => {
      return transaction.categoryId === categoryId
        ? mapCategoryTransaction(transaction, category)
        : transaction
    });
  const updatedSummary = category.type === CategoryType.expense
    ? { $set: { categoryExpenseTransactions: categoryTransactions } }
    : { $set: { categoryIncomeTransactions: categoryTransactions } };

  await Summary.updateOne({ userId }, updatedSummary);
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
  calculateAccountBalance,
  calculateSummaryBalance,
  updateSummaryCategoryTransactions,
  updateCategoryTransactions,
  updateAccountTransactions
};
