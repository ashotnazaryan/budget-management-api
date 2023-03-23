import { Request, Response } from 'express';
import { Summary, SummaryDocument, SummaryRequestDTO, Transaction, CategoryType } from '../models';

const getTransactions = async (request: Request, response: Response) => {
  const userId = (request.user as any)?.userId;
  try {
    const transactions = await Transaction.find({ userId });

    return response.status(200).json({ data: transactions });
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
  const summary = await Summary.findOne({ userId }) as SummaryDocument;
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
  };

  const newTransaction = { ...payload, userId };
  await Transaction.create(newTransaction);

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
      await Summary.updateOne({ userId }, {
        $set: {
          incomes: result.incomes,
          expenses: result.expenses,
          balance: result.balance,
          categoryTransactions: result.categoryTransactions
        }
      });

      const summaryUpdated = await Summary.findById(id);

      return response.status(200).json({ data: summaryUpdated });
    }

  } catch {
    return response.status(500).json({ message: 'Internal server error' });
  }
}

export { getTransactions, addTransaction };
