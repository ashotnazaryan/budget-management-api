import { Request, Response } from 'express';
import { Summary, SummaryDocument, SummaryRequestDTO, Transaction, CategoryType, TransactionDTO, SummaryDTO } from '../models';

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
  const categoryAvailable = summary.categoryExpenseTransactions.some((transaction) => transaction.categoryId === categoryId);
  const categoryExpenseTransactions = categoryAvailable
    ? summary.categoryExpenseTransactions.map((transaction) => ({
      ...transaction,
      amount: categoryId === transaction.categoryId ? transaction.amount + amount : transaction.amount
    }))
    : type === CategoryType.expense ? [...summary.categoryExpenseTransactions, payload] : summary.categoryExpenseTransactions;

  let result: SummaryDTO = {
    ...summary,
    userId,
  };
  let incomes = summary.incomes;
  let expenses = summary.expenses;

  const newTransaction = { ...payload, userId };
  await Transaction.create(newTransaction);

  if (type === CategoryType.income) {
    incomes = incomes + amount;

    result = {
      ...result,
      incomes,
      balance: incomes - expenses
    };
  } else {
    expenses = expenses + amount;

    result = {
      ...result,
      expenses,
      balance: incomes - expenses
    };
  }

  result = {
    ...result,
    categoryExpenseTransactions: categoryExpenseTransactions.map((transaction) => ({
      ...transaction,
      userId,
      categoryExpenseValue: parseInt(((transaction.amount / expenses) * 100).toFixed(0))
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
          categoryExpenseTransactions: result.categoryExpenseTransactions
        }
      });

      return response.status(201).json({ data: null });
    }

  } catch {
    return response.status(500).json({ message: 'Internal server error' });
  }
}

export { getTransactions, addTransaction };
