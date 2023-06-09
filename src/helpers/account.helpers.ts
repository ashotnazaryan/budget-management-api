import { AccountDocument, AccountInput } from '../models';

export const mapAccounts = (accounts: AccountDocument[], userId: string): AccountInput[] => {
  return accounts.map((account) => mapAccount(account, userId));
};

export const mapAccount = (account: AccountDocument, userId: string): AccountInput => {
  return {
    userId,
    id: account.id,
    name: account.name,
    icon: account.icon,
    currencyIso: account.currencyIso,
    balance: account.balance,
    isDefaultAccount: account.isDefaultAccount,
    nameKey: account.nameKey
  };
};
