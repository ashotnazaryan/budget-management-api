import { Request, Response } from 'express';
import { CategoryInput, CategoryType, Summary, SummaryDocument, SummaryInput, Transaction, TransactionInput } from '../models';
import { calculateSummaryBalance } from '../services';
import { calculateAmountByField, mapCategoryTransaction, mapSummary, mapSummaryBalance, mapTransactions } from '../helpers';

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
      const mappedSummary = mapSummaryBalance(summary, balance, userId);

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

const calculateSummary = async (
  mode: 'create' | 'edit',
  payload: TransactionInput
): Promise<SummaryInput> => {
  const { userId, categoryId, type, amount, accountId } = payload;
  const summary = mapSummary(await Summary.findOne({ userId }) as SummaryDocument, userId);
  let expenses = summary.expenses;
  let incomes = summary.incomes;
  let categoryExpenseTransactions = summary.categoryExpenseTransactions;
  let categoryIncomeTransactions = summary.categoryIncomeTransactions;

  if (mode === 'create') {
    expenses = type === CategoryType.expense ? summary.expenses + amount : summary.expenses;
    incomes = type === CategoryType.income ? summary.incomes + amount : summary.incomes;
    const categoryExpenseAvailable = summary.categoryExpenseTransactions.some((transaction) => transaction.categoryId === categoryId);
    const categoryIncomeAvailable = summary.categoryIncomeTransactions.some((transaction) => transaction.categoryId === categoryId);

    if (type === CategoryType.expense && !categoryExpenseAvailable) {
      categoryExpenseTransactions = [...categoryExpenseTransactions, payload];
    }

    if (type === CategoryType.income && !categoryIncomeAvailable) {
      categoryIncomeTransactions = [...categoryIncomeTransactions, payload];
    }

    categoryExpenseTransactions = categoryExpenseTransactions.map((transaction) => {
      return {
        ...transaction,
        userId,
        accountId,
        amount: (categoryExpenseAvailable && categoryId === transaction.categoryId) ? transaction.amount + amount : transaction.amount
      };
    });

    categoryIncomeTransactions = categoryIncomeTransactions.map((transaction) => {
      return {
        ...transaction,
        userId,
        accountId,
        amount: (categoryIncomeAvailable && categoryId === transaction.categoryId) ? transaction.amount + amount : transaction.amount
      };
    });
  } else {
    const categoryTransactions = mapTransactions(await Transaction.find({ userId, categoryId }));
    const categoryTransactionsAmount = calculateAmountByField(categoryTransactions, 'amount');

    if (type === CategoryType.expense) {
      const categoryExpenseTransactionsAmountUpdated = calculateAmountByField(categoryTransactions, 'amount');
      const categoryExpenseTransactionAmount = categoryExpenseTransactions.find((transaction) => transaction.categoryId === categoryId)?.amount || 0;
      const amountDiff = categoryExpenseTransactionsAmountUpdated - categoryExpenseTransactionAmount;

      categoryExpenseTransactions = categoryExpenseTransactions.map((transaction) => {
        return {
          ...transaction,
          amount: categoryId === transaction.categoryId ? categoryTransactionsAmount : transaction.amount
        }
      });

      expenses = expenses + amountDiff;
    }

    if (type === CategoryType.income) {
      const categoryIncomeTransactionsAmountUpdated = calculateAmountByField(categoryTransactions, 'amount');
      const categoryIncomeTransactionAmount = categoryIncomeTransactions.find((transaction) => transaction.categoryId === categoryId)?.amount || 0;
      const amountDiff = categoryIncomeTransactionsAmountUpdated - categoryIncomeTransactionAmount;

      categoryIncomeTransactions = categoryIncomeTransactions.map((transaction) => {
        return {
          ...transaction,
          amount: categoryId === transaction.categoryId ? categoryTransactionsAmount : transaction.amount
        }
      });

      incomes = incomes + amountDiff;
    }
  }

  categoryExpenseTransactions = categoryExpenseTransactions.map((transaction) => {
    return {
      ...transaction,
      percentValue: parseInt(((transaction.amount / expenses) * 100).toFixed(0))
    };
  });

  categoryIncomeTransactions = categoryIncomeTransactions.map((transaction) => {
    return {
      ...transaction,
      percentValue: parseInt(((transaction.amount / incomes) * 100).toFixed(0))
    };
  });
  
  // TODO: fix balance
  const balance = await calculateSummaryBalance(userId);

  return {
    userId,
    balance,
    expenses,
    incomes,
    categoryExpenseTransactions,
    categoryIncomeTransactions
  };
};

const updateSummaryCategoryTransactions = async (userId: string, categoryId: string, category: CategoryInput): Promise<void> => {
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
  calculateSummary,
  updateSummaryCategoryTransactions
};
