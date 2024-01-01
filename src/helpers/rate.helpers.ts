import { CURRENCIES } from '../constants';
import { NBPResponse, RateDocument, RateInput } from '../models';

export const mapRate = (rate: RateDocument): RateInput => {
  return {
    id: rate.get('_id'),
    date: rate.date,
    rates: rate.rates
  };
};

export const mapNBPResponse = (rate: NBPResponse): RateInput => {
  const currencyRates: NBPResponse = {
    effectiveDate: '',
    rates: [
      ...rate.rates,
      ...CURRENCIES
        .filter(({ iso }) => iso === 'PLN')
        .map(({ iso }) => {
          return {
            code: iso,
            mid: 1
          };
        })
    ]
  };

  return {
    date: rate.effectiveDate,
    rates: currencyRates.rates
      .filter(({ code }) => {
        return CURRENCIES.some(({ iso }) => iso === code);
      })
      .map(({ code, mid }) => {
        return {
          code,
          rate: mid
        };
      })
  };
};