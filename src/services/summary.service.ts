import { Request, Response } from 'express';
import { Summary, SummaryInput } from '../models';
import { calculateSummaryBalance } from './transaction.service';
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

export { getSummary, getBalanceInfo };
