import { Request, Response } from 'express';
import fetch from 'node-fetch';
import { NBPResponse, RegularRate, InvoiceRate, StartEndDate } from '../models';
import { mapNBPResponse, mapRate } from '../helpers';
import { CONFIG } from '../core/configs';

const getRegularExchangeRates = async (request: Request, response: Response) => {
  try {
    const dbRate = await RegularRate.findOne();

    // TODO: check if it's a new month
    if (dbRate) {
      return response.status(200).json(mapRate(dbRate));
    }

    const nbpResponse = await fetch(`${CONFIG.nbpURL}/A`);
    const data = await nbpResponse.json() as NBPResponse[];

    if (data?.length) {
      const rate = mapNBPResponse(data[0]);
      await RegularRate.create(rate);

      return response.status(200).json(rate);
    }

    return response.status(404).json({ message: 'Rate not found', status: 404 });
  } catch {
    return response.status(500).json({ message: 'Internal server error', status: 500 });
  }
};

const getInvoiceExchangeRates = async (request: Request<unknown, unknown, unknown, qs.ParsedQs>, response: Response) => {
  const { startDate, endDate } = request.query as unknown as StartEndDate;

  try {
    const dbRate = await InvoiceRate.findOne();

    // TODO: check if it's a new month
    if (dbRate) {
      return response.status(200).json(mapRate(dbRate));
    }

    const nbpResponse = await fetch(`${CONFIG.nbpURL}/A/${startDate}/${endDate}`);
    const data = await nbpResponse.json() as NBPResponse[];

    if (data?.length) {
      const rate = mapNBPResponse(data[data.length - 1]);
      await InvoiceRate.create(rate);

      return response.status(200).json(rate);
    }

    return response.status(404).json({ message: 'Rate not found', status: 404 });
  } catch {
    return response.status(500).json({ message: 'Internal server error', status: 500 });
  }
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