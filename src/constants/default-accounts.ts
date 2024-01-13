import { AccountDTO } from '../models';

export const DEFAULT_ACCOUNTS: Omit<AccountDTO, 'id'>[] = [
  {
    name: 'Wallet',
    icon: 'wallet',
    balance: 0,
    currencyIso: 'USD',
    isDefaultAccount: true,
    nameKey: 'ACCOUNTS.ITEMS.WALLET'
  }
];
