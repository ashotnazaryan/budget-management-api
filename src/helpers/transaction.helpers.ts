import { CategoryDTO, CategoryType, TransactionDocument, TransactionDTO } from '../models';

export const mapTransactions = (transactions: TransactionDocument[]): TransactionDTO[] => {
  return transactions.map(mapTransaction);
};

export const mapTransaction = (transaction: TransactionDocument): TransactionDTO => {
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
    accountNameKey: transaction.accountNameKey || null,
    note: transaction.note
  };
};

export const mapCategoryTransaction = (transaction: TransactionDTO, category: Pick<CategoryDTO, 'name' | 'type' | 'icon'>): TransactionDTO => {
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
      : acc + amount;
  }, 0);
};
