import { CategoryType, SummaryDocument, SummaryInput, TransactionDocument, TransactionInput } from '../models';
import { calculateAmountByField } from './common.helpers';

export const mapSummary = (summary: SummaryDocument, userId: string): SummaryInput => {
  return {
    userId,
    profit: summary.profit,
    balance: summary.balance,
    incomes: summary.incomes,
    expenses: summary.expenses,
    categoryExpenseTransactions: summary.categoryExpenseTransactions,
    categoryIncomeTransactions: summary.categoryIncomeTransactions
  };
};

export const mapSummaryProfit = (summary: SummaryDocument, profit: number, userId: string): SummaryInput => {
  return {
    userId,
    profit,
    balance: summary.balance,
    incomes: summary.incomes,
    expenses: summary.expenses,
    categoryExpenseTransactions: summary.categoryExpenseTransactions,
    categoryIncomeTransactions: summary.categoryIncomeTransactions
  };
};

export const getTransactionsByCategory = (transactions: TransactionInput[], expenses: number, incomes: number): TransactionInput[] => {
  const groupedTransactions = transactions.reduce<{ [key: TransactionInput['categoryId']]: TransactionInput[] }>((groups, item) => {
    const { categoryId } = item;

    if (!groups[categoryId]) {
      groups[categoryId] = [];
    }

    groups[categoryId].push(item);

    return groups;
  }, {});

  return Object.values(groupedTransactions).reduce<TransactionInput[]>((groups, items) => {
    const categoryAmount = calculateAmountByField(items, 'amount');

    const categoryItem = items.reduce<TransactionInput>((acc, curr) => {
      return {
        ...curr,
        amount: categoryAmount,
        percentValue: curr.type === CategoryType.expense
          ? parseInt(((categoryAmount / expenses) * 100).toFixed(0))
          : parseInt(((categoryAmount / incomes) * 100).toFixed(0))
      }
    }, {} as TransactionInput);
    return [...groups, categoryItem];
  }, []);
};
