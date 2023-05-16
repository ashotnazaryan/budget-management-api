import { Request, Response } from 'express';
import { Account, Category, Period, Setting, SettingInput, Summary, Transaction, Transfer } from '../models';

const initialSetting: SettingInput = {
  defaultCurrency: 'USD',
  defaultAccount: '',
  defaultPeriod: Period.month,
  locale: 'en',
  showDecimals: true
};

const getSettings = async (request: Request, response: Response) => {
  const userId = request.user?.userId;

  try {
    const setting = await Setting.findOne({ userId });

    if (setting) {
      return response.status(200).json(setting);
    }

    const emptySetting = { ...initialSetting, userId };
    const newEmptySetting = await Setting.create(emptySetting);

    return response.status(200).json(newEmptySetting);
  } catch {
    response.status(404).json({ message: 'Setting not found', status: 404 });
  }
};

const addSetting = async (request: Request<unknown, unknown, SettingInput>, response: Response) => {
  const userId = request.user?.userId;
  const { defaultCurrency, defaultAccount, defaultPeriod, showDecimals, isDarkTheme, locale } = request.body;

  try {
    const setting = await Setting.findOne({ userId });

    if (setting) {
      await Setting.updateOne({ userId }, {
        $set: {
          defaultCurrency,
          defaultAccount,
          defaultPeriod,
          showDecimals,
          isDarkTheme,
          locale
        }
      });

      return response.status(200).json(null);
    }

    const newSetting = { ...initialSetting, ...request.body, userId };
    await Setting.create(newSetting);

    return response.status(201).json(null);
  } catch {
    response.status(500).json({ message: 'Internal server error', status: 500 });
  }
};

const reset = async (request: Request, response: Response) => {
  const userId = request.params.userId;

  try {
    await Setting.deleteMany({ userId });
    await Account.deleteMany({ userId });
    await Category.deleteMany({ userId });
    await Summary.deleteMany({ userId });
    await Transaction.deleteMany({ userId });
    await Transfer.deleteMany({ userId });

    return response.status(204).json(null);
  } catch {
    response.status(500).json({ message: 'Internal server error', status: 500 });
  }
};

export { getSettings, addSetting, reset };
