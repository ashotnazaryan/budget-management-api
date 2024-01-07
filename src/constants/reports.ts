import { CurrencyIso } from '../models';

export const VAT_LIMIT: Record<CurrencyIso, number | undefined> = {
  PLN: 200000,
  EUR: undefined,
  USD: undefined,
  UAH: undefined
};
