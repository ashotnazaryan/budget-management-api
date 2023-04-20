import { Request, Response } from 'express';
import { Account, Category, Setting, SettingInput, Summary, Transaction } from '../models';

const initialSetting: SettingInput = {
  defaultCurrency: 'USD',
  defaultAccount: '',
  language: 'en',
  showDecimals: false,
  isDarkTheme: false
};

const getSettings = async (request: Request, response: Response) => {
  const userId = request.user!.userId;

  try {
    const setting = await Setting.findOne({ userId });

    if (setting) {
      return response.status(200).json({ data: setting });
    }

    const emptySetting = { ...initialSetting, userId };
    const newEmptySetting = await Setting.create(emptySetting);

    return response.status(200).json({ data: newEmptySetting });
  } catch {
    response.status(404).json({ error: { message: 'Setting not found', status: 404 } });
  }
};

const addSetting = async (request: Request<{}, {}, SettingInput>, response: Response) => {
  const userId = request.user!.userId;
  const { defaultCurrency, defaultAccount, showDecimals, isDarkTheme, language } = request.body;

  try {
    const setting = await Setting.findOne({ userId });

    if (setting) {
      await Setting.updateOne({ userId }, {
        $set: {
          defaultCurrency,
          defaultAccount,
          showDecimals,
          isDarkTheme,
          language
        }
      });

      return response.status(200).json({ data: null });
    }

    const newSetting = { ...initialSetting, ...request.body, userId };
    await Setting.create(newSetting);

    return response.status(201).json({ data: null });
  } catch {
    response.status(500).json({ error: { message: 'Internal server error', status: 500 } });
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

    return response.status(204).json({ data: null });
  } catch {
    response.status(500).json({ error: { message: 'Internal server error', status: 500 } });
  }
};

export { getSettings, addSetting, reset };
