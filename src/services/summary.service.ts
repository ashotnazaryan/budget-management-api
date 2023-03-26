import { Request, Response } from 'express';
import { Summary, SummaryDTO } from '../models';

const initialSummary: SummaryDTO = {
  incomes: 0,
  expenses: 0,
  balance: 0,
  categoryExpenseTransactions: []
};

const getSummary = async (request: Request, response: Response) => {
  const userId = (request.user as any)?.userId;

  try {
    const summary = await Summary.findOne({ userId });

    if (summary) {
      return response.status(200).json({ data: summary });
    }

    const emptySummary = { ...initialSummary, userId };
    const newEmptySummary = await Summary.create(emptySummary);

    return response.status(200).json({ data: newEmptySummary });
  } catch {
    response.status(404).json({ message: 'Summary not found' });
  }
};

const getBalanceInfo = async (request: Request, response: Response) => {
  const userId = (request.user as any)?.userId;

  try {
    const summary = await Summary.findOne({ userId });

    if (summary) {
      return response.status(200).json({ data: summary.balance });
    }

    return response.status(200).json({ data: 0 });
  } catch {
    return response.status(200).json({ data: 0 });
  }
};

export { getSummary, getBalanceInfo };
