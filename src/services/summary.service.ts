import { Request, Response } from 'express';
import { CategoryInput, CategoryType, Summary, SummaryInput, Transaction } from '../models';
import { calculateAccountsTotalBalance } from '../services';
import { getTransactionsByCategory, mapCategoryTransaction, mapSummaryProfit, mapTransactions } from '../helpers';
import { calculateAmountByField } from '../helpers';

const initialSummary: Omit<SummaryInput, 'userId'> = {
  incomes: 0,
  expenses: 0,
  profit: 0,
  balance: 0,
  categoryExpenseTransactions: [],
  categoryIncomeTransactions: []
};

const getSummary = async (request: Request, response: Response) => {
  const userId = request.user!.userId;

  try {
    const summary = await Summary.findOne({ userId });
    const balance = await calculateAccountsTotalBalance(userId);

    if (summary) {
      const mappedSummary = mapSummaryProfit(summary, balance, userId);

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
  const userId = request.user!.userId;

  try {
    const balance = await calculateAccountsTotalBalance(userId);

    if (!!balance || balance === 0) {
      return response.status(200).json({ data: balance });
    }

    return response.status(200).json({ data: 0 });
  } catch {
    return response.status(200).json({ data: 0 });
  }
};

const syncSummary = async (userId: string): Promise<SummaryInput> => {
  const allUserTransactions = await Transaction.find({ userId });
  const expenseTransactions = mapTransactions(allUserTransactions.filter(({ type }) => type === CategoryType.expense));
  const incomeTransactions = mapTransactions(allUserTransactions.filter(({ type }) => type === CategoryType.income));
  const expenses = calculateAmountByField(expenseTransactions, 'amount');
  const incomes = calculateAmountByField(incomeTransactions, 'amount');
  const profit = incomes - expenses;
  const balance = await calculateAccountsTotalBalance(userId);
  const categoryExpenseTransactions = getTransactionsByCategory(expenseTransactions, expenses, incomes);
  const categoryIncomeTransactions = getTransactionsByCategory(incomeTransactions, expenses, incomes);

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
  const result = await syncSummary(userId);

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

const updateSummaryCategoryTransactions = async (userId: string, categoryId: CategoryInput['id'], category: CategoryInput): Promise<void> => {
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

export {
  getSummary,
  getBalanceInfo,
  syncSummary,
  updateSummary,
  updateSummaryCategoryTransactions
};
