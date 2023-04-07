import { SummaryDocument, SummaryInput } from '../models';

export const mapSummary = (summary: SummaryDocument, balance: number, userId: string): SummaryInput => {
  return {
    userId,
    balance,
    incomes: summary.incomes,
    expenses: summary.expenses,
    categoryExpenseTransactions: summary.categoryExpenseTransactions,
    categoryIncomeTransactions: summary.categoryIncomeTransactions
  };
};
