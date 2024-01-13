import { CategoryType, SummaryDocument, SummaryDTO, TransactionDTO } from '../models';
import { calculateAmountByField } from './common.helpers';

export const mapSummary = (summary: SummaryDocument, userId: string): SummaryDTO => {
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

export const mapSummaryProfit = (summary: SummaryDocument, profit: number, userId: string): SummaryDTO => {
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

export const getTransactionsByCategory = (transactions: TransactionDTO[], expenses: number, incomes: number): TransactionDTO[] => {
  const groupedTransactions = transactions.reduce<{ [key: TransactionDTO['categoryId']]: TransactionDTO[] }>((groups, item) => {
    const { categoryId } = item;

    if (!groups[categoryId]) {
      groups[categoryId] = [];
    }

    groups[categoryId].push(item);

    return groups;
  }, {});

  return Object.values(groupedTransactions).reduce<TransactionDTO[]>((groups, items) => {
    const categoryAmount = calculateAmountByField(items, 'amount');

    const categoryItem = items.reduce<TransactionDTO>((acc, curr) => {
      return {
        ...curr,
        amount: categoryAmount,
        percentValue: curr.type === CategoryType.expense
          ? parseInt(((categoryAmount / expenses) * 100).toFixed(0))
          : parseInt(((categoryAmount / incomes) * 100).toFixed(0))
      };
    }, {} as TransactionDTO);
    return [...groups, categoryItem];
  }, []);
};
