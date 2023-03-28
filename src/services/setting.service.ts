import { Request, Response } from 'express';
import { Setting, SettingDTO, SettingInput } from '../models';

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
    response.status(404).json({ message: 'Setting not found' });
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
    response.status(500).json({ message: 'Internal server error' });
  }
};

export { getSettings, addSetting };