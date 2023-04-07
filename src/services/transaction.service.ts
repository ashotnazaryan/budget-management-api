import { Request, Response } from 'express';
import { Summary, SummaryInput, SummaryDocument, Transaction, CategoryType, TransactionRequestRequestDTO, Account } from '../models';
import { mapTransactionsWithAccounts } from '../helpers';

const getTransactions = async (request: Request, response: Response) => {
  const userId = (request.user as any)?.userId;
  try {
    const transactions = await Transaction.find({ userId }).sort({ createdAt: -1 });
    const accounts = await Account.find({ userId });

    const mappedTransactions = mapTransactionsWithAccounts(transactions, accounts);

    return response.status(200).json({ data: mappedTransactions });
  } catch {
    response.status(200).json({ data: null });
  }
};

const addTransaction = async (request: Request<{}, {}, TransactionRequestRequestDTO>, response: Response) => {
  const { amount, categoryId, name, type, icon, accountId } = request.body;
  const userId = (request.user as any)?.userId;

  if (!amount || !categoryId || !name) {
    return response.status(422).json({ error: { message: 'Missing fields', status: 422 } });
  }

  const payload = { amount, categoryId, name, type, icon, createdAt: new Date() };
  const summary = await Summary.findOne({ userId }) as SummaryDocument;
  const categoryExpenseAvailable = summary.categoryExpenseTransactions.some((transaction) => transaction.categoryId === categoryId);
  const categoryIncomeAvailable = summary.categoryIncomeTransactions.some((transaction) => transaction.categoryId === categoryId);
  const categoryExpenseTransactions = categoryExpenseAvailable
    ? summary.categoryExpenseTransactions.map((transaction) => ({
      ...transaction,
      amount: categoryId === transaction.categoryId ? transaction.amount + amount : transaction.amount
    }))
    : type === CategoryType.expense ? [...summary.categoryExpenseTransactions, payload] : summary.categoryExpenseTransactions;
  const categoryIncomeTransactions = categoryIncomeAvailable
    ? summary.categoryIncomeTransactions.map((transaction) => ({
      ...transaction,
      amount: categoryId === transaction.categoryId ? transaction.amount + amount : transaction.amount
    }))
    : type === CategoryType.income ? [...summary.categoryIncomeTransactions, payload] : summary.categoryIncomeTransactions;

  let result: SummaryInput = {
    ...summary,
    userId,
  };
  let incomes = summary.incomes;
  let expenses = summary.expenses;

  await createTransaction({ ...payload, userId, accountId, icon });

  await calculateAccountBalance(accountId, amount, type);

  const balance = await calculateSummaryBalance(userId);

  if (type === CategoryType.income) {
    incomes = incomes + amount;

    result = {
      ...result,
      incomes,
      balance
    };
  } else {
    expenses = expenses + amount;

    result = {
      ...result,
      expenses,
      balance
    };
  }

  result = {
    ...result,
    categoryExpenseTransactions: categoryExpenseTransactions.map((transaction) => ({
      ...transaction,
      userId,
      accountId,
      percentValue: parseInt(((transaction.amount / expenses) * 100).toFixed(0))
    })),
    categoryIncomeTransactions: categoryIncomeTransactions.map((transaction) => ({
      ...transaction,
      userId,
      accountId,
      percentValue: parseInt(((transaction.amount / incomes) * 100).toFixed(0))
    }))
  };

  try {
    let summaryCreated;
    if (!summary.userId) {
      summaryCreated = await Summary.create(result);

      return response.status(201).json({ data: summaryCreated });
    } else {
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
    }

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

const createTransaction = async (transaction: TransactionRequestRequestDTO & { userId: string }) => {
  await Transaction.create(transaction);
};

export { getTransactions, addTransaction, calculateAccountBalance, calculateSummaryBalance };
