import { Request, Response } from 'express';
import { Summary, SummaryDocument, Transaction, CategoryType, TransactionRequestRequestDTO, SummaryDTO } from '../models';

const getTransactions = async (request: Request, response: Response) => {
  const userId = (request.user as any)?.userId;
  try {
    const transactions = await Transaction.find({ userId }).sort({ createdAt: -1 });

    return response.status(200).json({ data: transactions });
  } catch {
    response.status(200).json({ data: null });
  }
};

const addTransaction = async (request: Request<{}, {}, TransactionRequestRequestDTO>, response: Response) => {
  const { amount, categoryId, name, type, icon } = request.body;
  const userId = (request.user as any)?.userId;

  if (!amount || !categoryId || !name) {
    return response.status(422).json({ error: { message: 'The fields amount, categoryId, name, type are required', status: 422 } });
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

  let result: SummaryDTO = {
    ...summary,
    userId,
  };
  let incomes = summary.incomes;
  let expenses = summary.expenses;

  const newTransaction = { ...payload, userId, icon };
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
      percentValue: parseInt(((transaction.amount / expenses) * 100).toFixed(0))
    })),
    categoryIncomeTransactions: categoryIncomeTransactions.map((transaction) => ({
      ...transaction,
      userId,
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
}

export { getTransactions, addTransaction };
