import { AccountDocument, TransactionDocument } from '../models';

export const mapTransactionsWithAccounts = (transactions: TransactionDocument[], accounts: AccountDocument[]) => {
  return transactions.map((transaction) => {
    const { name, icon } = accounts.find(({ id }) => id === transaction.accountId) || {};

    return {
      id: transaction.id,
      accountName: name,
      accountIcon: icon,
      accountId: transaction.accountId,
      categoryId: transaction.categoryId,
      userId: transaction.userId,
      type: transaction.type,
      name: transaction.name,
      amount: transaction.amount,
      percentValue: transaction.percentValue,
      createdAt: transaction.createdAt,
      icon: transaction.icon,
    };
  });
};
