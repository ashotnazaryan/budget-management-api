import { Request, Response } from 'express';
import { CategoryType, Summary, SummaryDocument, SummaryInput, TransactionInput } from '../models';
import { calculateAccountBalance, calculateSummaryBalance } from './transaction.service';
import { mapSummary } from '../helpers';

const initialSummary: Omit<SummaryInput, 'userId'> = {
  incomes: 0,
  expenses: 0,
  balance: 0,
  categoryExpenseTransactions: [],
  categoryIncomeTransactions: []
};

const getSummary = async (request: Request, response: Response) => {
  const userId = (request.user as any)?.userId;

  try {
    const summary = await Summary.findOne({ userId });
    const balance = await calculateSummaryBalance(userId);

    if (summary) {
      const mappedSummary = mapSummary(summary, balance, userId);

      return response.status(200).json({ data: mappedSummary });
    }

    const emptySummary = { ...initialSummary, userId };
    const newEmptySummary = await Summary.create(emptySummary);

    return response.status(200).json({ data: newEmptySummary });
  } catch {
    response.status(404).json({ error: { message: 'Summary not found', status: 404 } });
  }
};

const getBalanceInfo = async (request: Request, response: Response) => {
  const userId = (request.user as any)?.userId;

  try {
    const balance = await calculateSummaryBalance(userId);

    if (!!balance || balance === 0) {
      return response.status(200).json({ data: balance });
    }

    return response.status(200).json({ data: 0 });
  } catch {
    return response.status(200).json({ data: 0 });
  }
};

const calculateSummary = async (payload: TransactionInput, userId: string): Promise<SummaryInput> => {
  const summary = await Summary.findOne({ userId }) as SummaryDocument;
  const categoryExpenseAvailable = summary.categoryExpenseTransactions.some((transaction) => transaction.categoryId === payload.categoryId);
  const categoryIncomeAvailable = summary.categoryIncomeTransactions.some((transaction) => transaction.categoryId === payload.categoryId);
  const categoryExpenseTransactions = categoryExpenseAvailable
    ? summary.categoryExpenseTransactions.map((transaction) => ({
      ...transaction,
      amount: payload.categoryId === transaction.categoryId ? transaction.amount + payload.amount : transaction.amount
    }))
    : payload.type === CategoryType.expense ? [...summary.categoryExpenseTransactions, payload] : summary.categoryExpenseTransactions;
  const categoryIncomeTransactions = categoryIncomeAvailable
    ? summary.categoryIncomeTransactions.map((transaction) => ({
      ...transaction,
      amount: payload.categoryId === transaction.categoryId ? transaction.amount + payload.amount : transaction.amount
    }))
    : payload.type === CategoryType.income ? [...summary.categoryIncomeTransactions, payload] : summary.categoryIncomeTransactions;

  let result: SummaryInput = {
    ...summary,
    userId,
  };
  let incomes = summary.incomes;
  let expenses = summary.expenses;

  await calculateAccountBalance(payload.accountId, payload.amount, payload.type);

  const balance = await calculateSummaryBalance(userId);

  if (payload.type === CategoryType.income) {
    incomes = incomes + payload.amount;

    result = {
      ...result,
      incomes,
      balance
    };
  } else {
    expenses = expenses + payload.amount;

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
      accountId: payload.accountId,
      percentValue: parseInt(((transaction.amount / expenses) * 100).toFixed(0))
    })),
    categoryIncomeTransactions: categoryIncomeTransactions.map((transaction) => ({
      ...transaction,
      userId,
      accountId: payload.accountId,
      percentValue: parseInt(((transaction.amount / incomes) * 100).toFixed(0))
    }))
  };

  return result;
};

export { getSummary, getBalanceInfo, calculateSummary };
