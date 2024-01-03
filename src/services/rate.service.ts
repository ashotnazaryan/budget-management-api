import { Request, Response } from 'express';
import fetch from 'node-fetch';
import { NBPResponse, RegularRate, InvoiceRate, StartEndDate, RateInput } from '../models';
import { isNewDate, isNewMonth, mapNBPResponse, mapRate } from '../helpers';
import { CONFIG } from '../core/configs';

const getRegularExchangeRates = async (request: Request, response: Response) => {
  try {
    const dbRate = await RegularRate.findOne();

    if (!dbRate) {
      const rate = await getNBPData(`${CONFIG.nbpURL}/A`);

      if (rate) {
        await RegularRate.create(rate);

        return response.status(200).json(rate);
      }
    } else if (dbRate && isNewDate(dbRate.date)) {
      const rate = await getNBPData(`${CONFIG.nbpURL}/A`);

      if (rate) {
        await RegularRate.updateOne(rate);

        return response.status(200).json(rate);
      }
    } else {
      return response.status(200).json(mapRate(dbRate));
    }
  } catch {
    return response.status(500).json({ message: 'Internal server error', status: 500 });
  }
};

const getInvoiceExchangeRates = async (request: Request<unknown, unknown, unknown, qs.ParsedQs>, response: Response) => {
  const { startDate, endDate } = request.query as unknown as StartEndDate;

  try {
    const dbRate = await InvoiceRate.findOne();

    if (!dbRate) {
      const rate = await getNBPData(`${CONFIG.nbpURL}/A/${startDate}/${endDate}`);

      if (rate) {
        await InvoiceRate.create(rate);

        return response.status(200).json(rate);
      }
    } else if (dbRate && isNewMonth(dbRate.date)) {
      const rate = await getNBPData(`${CONFIG.nbpURL}/A/${startDate}/${endDate}`);

      if (rate) {
        await InvoiceRate.updateOne(rate);

        return response.status(200).json(rate);
      }
    } else {
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

export {
  getRegularExchangeRates,
  getInvoiceExchangeRates
};

// 1 usd == 3.935 pln
// 1 eur = 4.348 pln
// 1 uah == 0.1037 pln
// 1 pln == 1 pln


// for uah
// 1 usd == (1 / 0.1037) * 3.935 -> uah
// 1 eur = (1 / 0.1037) * 4.348 -> uah
// 1 pln = (1 / 0.1037) * 1 -> uah

// for eur
// 1 usd = (1 / 4.348) * 3.935 -> eur
// 1 pln = (1 / 4.348) * 1 -> eur
// 1 uah = (1 / 4.348) * 0.1037 -> eur

// for usd
// 1 eur = (1 / 3.935) * 4.348 -> usd
// 1 pln = (1 / 3.935) * 1 -> usd
// 1 uah = (1 / 3.935) * 0.1037 -> usd