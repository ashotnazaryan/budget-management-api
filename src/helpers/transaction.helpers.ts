import { CategoryInput, CategoryType, TransactionDocument, TransactionInput } from '../models';

export const mapTransactions = (transactions: TransactionDocument[]): TransactionInput[] => {
  return transactions.map(mapTransaction);
};

export const mapTransaction = (transaction: TransactionDocument): TransactionInput => {
  return {
    id: transaction.id,
    categoryId: transaction.categoryId,
    userId: transaction.userId,
    type: transaction.type,
    name: transaction.name,
    nameKey: transaction.nameKey,
    amount: transaction.amount,
    currencyIso: transaction.currencyIso,
    percentValue: transaction.percentValue,
    createdAt: transaction.createdAt,
    icon: transaction.icon,
    accountId: transaction.accountId,
    accountName: transaction.accountName,
    accountIcon: transaction.accountIcon,
    accountNameKey: transaction.accountNameKey || null
  };
};

export const mapCategoryTransaction = (transaction: TransactionInput, category: Pick<CategoryInput, 'name' | 'type' | 'icon'>): TransactionInput => {
  return {
    ...transaction,
    name: category.name,
    type: category.type,
    icon: category.icon
  };
};

export const calculateTransactionsAmount = (transactions: TransactionDocument[]): number => {
  return transactions.reduce<number>((acc, { type, amount }) => {
    return type === CategoryType.expense
      ? acc - amount
      : acc + amount
  }, 0);
};
