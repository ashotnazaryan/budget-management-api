import { Request, Response } from 'express';
import { CategoryDTO, CategoryType, DateRange, Summary, SummaryDTO, Transaction } from '../models';
import { calculateAccountsTotalBalance } from '../services';
import { getTransactionsByCategory, mapCategoryTransaction, mapTransactions } from '../helpers';
import { calculateAmountByField } from '../helpers';

const initialSummary: Omit<SummaryDTO, 'userId'> = {
  incomes: 0,
  expenses: 0,
  profit: 0,
  balance: 0,
  categoryExpenseTransactions: [],
  categoryIncomeTransactions: []
};

const getSummary = async (request: Request<unknown, unknown, unknown, qs.ParsedQs>, response: Response) => {
  const userId = request.user?.userId;
  const { fromDate, toDate } = request.query as unknown as DateRange;
  const from = new Date(fromDate);
  const to = new Date(toDate);

  if (!userId) {
    return;
  }

  try {
    const summary = await calculateSummary(userId, from, to);

    if (summary) {
      return response.status(200).json(summary);
    }

    const emptySummary = { ...initialSummary, userId };
    const newEmptySummary = await Summary.create(emptySummary);

    return response.status(200).json(newEmptySummary);
  } catch {
    response.status(404).json({ message: 'Summary not found', status: 404 });
  }
};

const getBalanceInfo = async (request: Request, response: Response) => {
  const userId = request.user?.userId;

  if (!userId) {
    return;
  }

  try {
    const balance = await calculateAccountsTotalBalance(userId);

    if (!!balance || balance === 0) {
      return response.status(200).json(balance);
    }

    return response.status(200).json(0);
  } catch {
    return response.status(200).json(0);
  }
};

const calculateSummary = async (userId: string, fromDate?: Date, toDate?: Date): Promise<SummaryDTO> => {
  const allUserTransactions = await Transaction.find({ userId, createdAt: { $gte: fromDate, $lte: toDate } });
  const expenseTransactions = mapTransactions(allUserTransactions.filter(({ type }) => type === CategoryType.expense));
  const incomeTransactions = mapTransactions(allUserTransactions.filter(({ type }) => type === CategoryType.income));
  const sortedExpenseTransactions = expenseTransactions.sort((a, b) => b.amount - a.amount);
  const sortedIncomeTransactions = incomeTransactions.sort((a, b) => b.amount - a.amount);
  const expenses = calculateAmountByField(sortedExpenseTransactions, 'amount');
  const incomes = calculateAmountByField(sortedIncomeTransactions, 'amount');
  const profit = incomes - expenses;
  const balance = await calculateAccountsTotalBalance(userId);
  const categoryExpenseTransactions = getTransactionsByCategory(sortedExpenseTransactions, expenses, incomes);
  const categoryIncomeTransactions = getTransactionsByCategory(sortedIncomeTransactions, expenses, incomes);

  return {
    userId,
    incomes,
    expenses,
    profit,
    balance,
    categoryExpenseTransactions,
    categoryIncomeTransactions
  };
};


const updateSummary = async (userId: string): Promise<void> => {
  const result = await calculateSummary(userId);

  await Summary.findOneAndUpdate({ userId }, {
    $set: {
      incomes: result.incomes,
      expenses: result.expenses,
      profit: result.profit,
      balance: result.balance,
      categoryExpenseTransactions: result.categoryExpenseTransactions,
      categoryIncomeTransactions: result.categoryIncomeTransactions
    }
  });
};

const updateSummaryCategoryTransactions = async (userId: string, categoryId: CategoryDTO['id'], category: CategoryDTO): Promise<void> => {
  const summary = await Summary.findOne({ userId });

  const categoryTransactions = category.type === CategoryType.expense
    ? summary?.categoryExpenseTransactions.map((transaction) => {
      return transaction.categoryId === categoryId
        ? mapCategoryTransaction(transaction, category)
        : transaction;
    })
    : summary?.categoryIncomeTransactions.map((transaction) => {
      return transaction.categoryId === categoryId
        ? mapCategoryTransaction(transaction, category)
        : transaction;
    });
  const updatedSummary = category.type === CategoryType.expense
    ? { $set: { categoryExpenseTransactions: categoryTransactions } }
    : { $set: { categoryIncomeTransactions: categoryTransactions } };

  await Summary.updateOne({ userId }, updatedSummary);
};

export {
  getSummary,
  getBalanceInfo,
  calculateSummary,
  updateSummary,
  updateSummaryCategoryTransactions
};
