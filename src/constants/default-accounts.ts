import { AccountInput } from '../models';

export const DEFAULT_ACCOUNTS: Omit<AccountInput, 'id'>[] = [
  {
    name: 'Wallet',
    icon: 'wallet',
    balance: 0,
    currencyIso: 'USD',
    isDefaultAccount: true,
    nameKey: 'ACCOUNTS.ITEMS.WALLET'
  }
];
