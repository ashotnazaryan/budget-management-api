import { Request, Response } from 'express';
import fetch from 'node-fetch';
import { CONFIG } from '../core/configs';
import { NBPResponse, RegularRate, InvoiceRate, StartEndDate, RateInput, CurrencyIso, RateDocument, Setting } from '../models';
import { isNewDate, isNewMonth, mapNBPResponse, mapRate, roundToDecimalPlaces } from '../helpers';

const getRegularExchangeRates = async (request: Request, response: Response) => {
  const userId = request.user?.userId;

  try {
    const dbRate = await RegularRate.findOne();
    const setting = await Setting.findOne({ userId });

    if (!setting) {
      return response.status(404).json({ message: 'Setting not found', status: 404 });
    }

    if (!dbRate) {
      let rate = await getNBPData(`${CONFIG.nbpURL}/A`);

      if (rate) {
        if (setting.defaultCurrency !== CONFIG.defaultCurrency) {
          rate = getRate(rate, setting.defaultCurrency, false);
        }

        await RegularRate.create(rate);

        return response.status(200).json(rate);
      }
    } else if (dbRate && isNewDate(dbRate.date)) {
      let rate = await getNBPData(`${CONFIG.nbpURL}/A`);

      if (rate) {
        if (setting.defaultCurrency !== CONFIG.defaultCurrency) {
          rate = getRate(rate, setting.defaultCurrency, false);
        }

        await RegularRate.updateOne(rate);

        return response.status(200).json(rate);
      }
    } else {
      if (setting.defaultCurrency !== CONFIG.defaultCurrency) {
        const rate = getRate(dbRate, setting.defaultCurrency, false);
        return response.status(200).json(rate);
      }

      return response.status(200).json(mapRate(dbRate));
    }
  } catch {
    return response.status(500).json({ message: 'Internal server error', status: 500 });
  }
};

const getInvoiceExchangeRates = async (request: Request<unknown, unknown, unknown, qs.ParsedQs>, response: Response) => {
  const { startDate, endDate } = request.query as unknown as StartEndDate;
  const userId = request.user?.userId;

  try {
    const dbRate = await InvoiceRate.findOne();
    const setting = await Setting.findOne({ userId });

    if (!setting) {
      return response.status(404).json({ message: 'Setting not found', status: 404 });
    }

    if (!dbRate) {
      let rate = await getNBPData(`${CONFIG.nbpURL}/A/${startDate}/${endDate}`);

      if (rate) {
        if (setting.defaultCurrency !== CONFIG.defaultCurrency) {
          rate = getRate(rate, setting.defaultCurrency, false);
        }

        await InvoiceRate.create(rate);

        return response.status(200).json(rate);
      }
    } else if (dbRate && isNewMonth(dbRate.date)) {
      let rate = await getNBPData(`${CONFIG.nbpURL}/A/${startDate}/${endDate}`);

      if (rate) {
        if (setting.defaultCurrency !== CONFIG.defaultCurrency) {
          rate = getRate(rate, setting.defaultCurrency, false);
        }

        await InvoiceRate.updateOne(rate);

        return response.status(200).json(rate);
      }
    } else {
      if (setting.defaultCurrency !== CONFIG.defaultCurrency) {
        const rate = getRate(dbRate, setting.defaultCurrency, false);
        return response.status(200).json(rate);
      }

      return response.status(200).json(mapRate(dbRate));
    }
  } catch {
    return response.status(500).json({ message: 'Internal server error', status: 500 });
  }
};

const getNBPData = async (url: string): Promise<RateInput | null> => {
  const nbpResponse = await fetch(url);
  const data = await nbpResponse.json() as NBPResponse[];

  return data?.length ? mapNBPResponse(data[data.length - 1]) : null;
};

const recalculateRegularRates = async (currency: CurrencyIso): Promise<void> => {
  try {
    const dbRate = await RegularRate.findOne();

    if (dbRate) {
      const updatedRate = getRate(dbRate, currency);

      await RegularRate.updateOne(updatedRate);
    }
  } catch (error) {
    console.error('An error occurred in recalculateRegularRates:', error);
  }
};

const recalculateInvoiceRates = async (currency: CurrencyIso): Promise<void> => {
  try {
    const dbRate = await InvoiceRate.findOne();

    if (dbRate) {
      const updatedRate = getRate(dbRate, currency);

      await InvoiceRate.updateOne(updatedRate);
    }
  } catch (error) {
    console.error('An error occurred in recalculateInvoiceRates:', error);
  }
};

const getRate = (dbRate: RateDocument | RateInput, currency: CurrencyIso, shouldMapRate = true): RateInput => {
  const mappedRate = shouldMapRate ? mapRate(dbRate as RateDocument) : dbRate;
  const { rates, date } = mappedRate;
  const value = rates.find((rate) => rate.code === currency)?.value || 1;
  const coef = 1 / value;

  return {
    date,
    rates: rates.map((rate) => {
      return {
        ...rate,
        value: roundToDecimalPlaces(coef * rate.value, 10)
      };
    })
  };
};

export {
  getRegularExchangeRates,
  getInvoiceExchangeRates,
  recalculateRegularRates,
  recalculateInvoiceRates
};
