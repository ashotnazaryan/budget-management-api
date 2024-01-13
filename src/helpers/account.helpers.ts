import { AccountDocument, AccountDTO } from '../models';

export const mapAccounts = (accounts: AccountDocument[], userId: string): AccountDTO[] => {
  return accounts.map((account) => mapAccount(account, userId));
};

export const mapAccount = (account: AccountDocument, userId: string): AccountDTO => {
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
