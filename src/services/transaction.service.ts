import { Request, Response } from 'express';
import { Summary, SummaryInput, SummaryDocument, Transaction, CategoryType, TransactionRequestRequestDTO, Account, TransactionInput, TransactionDocument, CategoryInput, AccountInput } from '../models';
import { mapCategoryTransaction, mapTransaction, mapTransactions } from '../helpers';

const getTransactions = async (request: Request, response: Response) => {
  const userId = (request.user as any)?.userId;
  try {
    const transactions = await Transaction.find({ userId }).sort({ createdAt: -1 });
    const mappedTransactions = mapTransactions(transactions);

    return response.status(200).json({ data: mappedTransactions });
  } catch {
    response.status(200).json({ data: null });
  }
};

const addTransaction = async (request: Request<{}, {}, TransactionRequestRequestDTO>, response: Response) => {
  const { amount, categoryId, name, type, icon, accountId } = request.body;
  const userId = (request.user as any)?.userId;

  if (!amount || !categoryId || !name) {
    return response.status(422).json({ error: { message: 'Missing fields', status: 422 } });
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

  let result: SummaryInput = {
    ...summary,
    userId,
  };
  let incomes = summary.incomes;
  let expenses = summary.expenses;

  await createTransaction({ ...payload, userId, accountId, icon } as TransactionInput);

  await calculateAccountBalance(accountId, amount, type);

  const balance = await calculateSummaryBalance(userId);

  if (type === CategoryType.income) {
    incomes = incomes + amount;

    result = {
      ...result,
      incomes,
      balance
    };
  } else {
    expenses = expenses + amount;

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
      accountId,
      percentValue: parseInt(((transaction.amount / expenses) * 100).toFixed(0))
    })),
    categoryIncomeTransactions: categoryIncomeTransactions.map((transaction) => ({
      ...transaction,
      userId,
      accountId,
      percentValue: parseInt(((transaction.amount / incomes) * 100).toFixed(0))
    }))
  };

  try {
    let summaryCreated;
    if (!summary.userId) {
      summaryCreated = await Summary.create(result);

      return response.status(201).json({ data: summaryCreated });
    } else {
      // TODO: use findByIdAndUpdate
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
};

const calculateAccountBalance = async (accountId: string, amount: number, type: CategoryType): Promise<void> => {
  const account = await Account.findById(accountId);

  if (account) {
    const balance = type === CategoryType.income ? account.balance + amount : account.balance - amount;

    await Account.findByIdAndUpdate(accountId, { balance });
  }
};

const calculateSummaryBalance = async (userId: string): Promise<number> => {
  const userAccounts = await Account.find({ userId });

  if (userAccounts.length) {
    return userAccounts.reduce<number>((acc, curr) => {
      return acc + curr.balance;
    }, 0);
  }

  return 0;
};

const createTransaction = async (transaction: TransactionInput & { userId: string }) => {
  const account = await Account.findById(transaction.accountId);
  const extendedTransaction = {
    ...transaction,
    accountName: account?.name,
    accountIcon: account?.icon
  } as TransactionDocument;

  const mappedTransaction = mapTransaction(extendedTransaction);
  await Transaction.create(mappedTransaction);
};

const updateSummaryCategoryTransactions = async (userId: string, category: CategoryInput): Promise<void> => {
  const summary = await Summary.findOne({ userId });

  const categoryTransactions = category.type === CategoryType.expense
    ? summary?.categoryExpenseTransactions.map((transaction) => mapCategoryTransaction(transaction, category))
    : summary?.categoryIncomeTransactions.map((transaction) => mapCategoryTransaction(transaction, category));
  const updatedSummary = category.type === CategoryType.expense
    ? { $set: { categoryExpenseTransactions: categoryTransactions } }
    : { $set: { categoryIncomeTransactions: categoryTransactions } };

  await Summary.updateOne({ userId }, updatedSummary);
};

const updateAccountTransactions = async (userId: string, accountId: string, account: AccountInput): Promise<void> => {
  await Transaction.updateMany({ userId, accountId },
    {
      $set: {
        accountName: account.name,
        accountIcon: account.icon
      }
    });
};

const updateCategoryTransactions = async (userId: string, categoryId: string, category: CategoryInput): Promise<void> => {
  await Transaction.updateMany({ userId, categoryId },
    {
      $set: {
        name: category.name,
        icon: category.icon
      }
    });
};

export {
  getTransactions,
  addTransaction,
  calculateAccountBalance,
  calculateSummaryBalance,
  updateSummaryCategoryTransactions,
  updateAccountTransactions,
  updateCategoryTransactions
};
