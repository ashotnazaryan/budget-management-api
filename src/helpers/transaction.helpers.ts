import { CategoryInput, TransactionDocument, TransactionInput } from '../models';

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
    amount: transaction.amount,
    percentValue: transaction.percentValue,
    createdAt: transaction.createdAt,
    icon: transaction.icon,
    accountId: transaction.accountId,
    accountName: transaction.accountName,
    accountIcon: transaction.accountIcon
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
