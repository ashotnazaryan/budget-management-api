import { Request, Response } from 'express';
import { CategoryType, Summary, SummaryDTO, SummaryRequestDTO } from '../models/summary';

const initialSummary: SummaryDTO = {
  incomes: 0,
  expenses: 0,
  balance: 0,
  transactions: [],
  categoryTransactions: []
}

const getSummary = async (request: Request, response: Response) => {
  const userId = (request.user as any)?.userId;
  try {
    const summary = await Summary.findOne({ userId });

    return response.status(200).json({ data: summary });
  } catch {
    response.status(200).json({ data: null });
  }
};

const addTransaction = async (request: Request<{}, {}, SummaryRequestDTO>, response: Response) => {
  const { amount, categoryId, name, type } = request.body;
  const userId = (request.user as any)?.userId;

  if (!amount || !categoryId || !name) {
    return response.status(422).json({ message: 'The fields amount, categoryId, name, type are required' });
  }
  const payload = { amount, categoryId, name, type, createdAt: new Date() };
  const summary = await Summary.findOne({ userId }) || initialSummary;
  const categoryAvailable = summary.categoryTransactions.some((transaction) => transaction.categoryId === categoryId);
  const categoryTransactions = categoryAvailable
    ? summary.categoryTransactions.map((transaction) => ({
      ...transaction,
      amount: categoryId === transaction.categoryId ? transaction.amount + amount : transaction.amount
    }))
    : [...summary.categoryTransactions, payload];

  let result = {
    ...summary,
    userId,
    categoryTransactions: categoryTransactions,
    transactions: [...summary.transactions, payload],
  } as SummaryDTO;

  if (type === CategoryType.income) {
    const incomes = summary.incomes + amount;

    result = {
      ...result,
      incomes,
      balance: incomes - summary.expenses
    };
  } else {
    const expenses = summary.expenses + amount;

    result = {
      ...result,
      expenses,
      balance: summary.incomes - expenses
    };
  }

  try {
    let summaryCreated;
    const id = summary._id;
    if (!id) {
      summaryCreated = await Summary.create(result);

      return response.status(201).json({ data: summaryCreated });
    } else {
      await Summary.updateOne({userId }, {
        $set: {
          incomes: result.incomes,
          expenses: result.expenses,
          balance: result.balance,
          categoryTransactions: result.categoryTransactions,
          transactions: result.transactions,
        }
      });

      const summaryUpdated = await Summary.findById(id);

      return response.status(200).json({ data: summaryUpdated });
    }

  } catch {
    return response.status(500).json({ message: 'Internal server error' });
  }
}

export { getSummary, addTransaction };
