import { SummaryDocument, SummaryInput } from '../models';

export const mapSummary = (summary: SummaryDocument, userId: string): SummaryInput => {
  return {
    userId,
    balance: summary?.balance,
    incomes: summary?.incomes,
    expenses: summary?.expenses,
    categoryExpenseTransactions: summary?.categoryExpenseTransactions,
    categoryIncomeTransactions: summary?.categoryIncomeTransactions
  };
};

export const mapSummaryBalance = (summary: SummaryDocument, balance: number, userId: string): SummaryInput => {
  return {
    userId,
    balance,
    incomes: summary?.incomes,
    expenses: summary?.expenses,
    categoryExpenseTransactions: summary?.categoryExpenseTransactions,
    categoryIncomeTransactions: summary?.categoryIncomeTransactions
  };
};

export const calculateAmountByField = (arr: any[], field: string): number => {
  return arr.length
    ? arr.reduce<number>((acc, curr) => {
      return acc + curr[field];
    }, 0)
    : 0;
};
