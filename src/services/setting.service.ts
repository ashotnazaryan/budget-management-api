import { Request, Response } from 'express';
import { Account, Category, Setting, SettingDTO, SettingInput, Summary, Transaction } from '../models';

const initialSetting: SettingInput = {
  currency: {
    iso: 'USD',
    symbol: '$',
    name: 'US Dollar'
  },
  showDecimals: false
};

const getSettings = async (request: Request, response: Response) => {
  const userId = (request.user as any)?.userId;

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

const addSetting = async (request: Request<{}, {}, SettingDTO>, response: Response) => {
  const userId = (request.user as any)?.userId;
  const { currency, showDecimals } = request.body;

  try {
    await Setting.updateOne({ userId }, {
      $set: {
        currency,
        showDecimals
      }
    });

    return response.status(201).json({ data: null });
  } catch {
    response.status(500).json({ error: { message: 'Internal server error', status: 500 } });
  }
};

const deleteAllData = async (request: Request, response: Response) => {
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

export { getSettings, addSetting, deleteAllData };
