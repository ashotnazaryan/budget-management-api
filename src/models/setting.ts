import mongoose, { Document } from 'mongoose';
import { CONFIG } from '../core/configs';

const Schema = mongoose.Schema;

interface Currency {
  iso: 'USD' | 'EUR' | 'PLN' | 'UAH' | 'AMD';
  name: 'US Dollar' | 'Euro' | 'Polish Zloty' | 'Ukrainian Hryvnia' | 'Armenian Dram';
  symbol: '$' | '€' | 'zł' | '₴' | '֏';
}

interface SettingDocument extends Document {
  defaultCurrency: Currency;
  defaultAccount: string;
  showDecimals: boolean;
  isDarkTheme: boolean;
  userId: string;
};

interface SettingInput {
  defaultCurrency: Currency;
  defaultAccount: string;
  showDecimals: boolean;
  isDarkTheme: boolean;
}

interface SettingDTO {
  defaultCurrency: Currency;
  defaultAccount: string;
  showDecimals: boolean;
  isDarkTheme: boolean;
}

const settingSchema = new Schema(
  {
    defaultCurrency: {
      type: Schema.Types.Mixed as unknown as Currency,
      required: true
    },
    defaultAccount: {
      type: Schema.Types.String
    },
    showDecimals: {
      type: Schema.Types.Boolean,
      required: true
    },
    isDarkTheme: {
      type: Schema.Types.Boolean,
      required: true
    },
    userId: {
      type: Schema.Types.String,
      required: true
    },
  },
  {
    timestamps: false,
    collection: CONFIG.collections.setting
  }
);

const Setting = mongoose.model<SettingDocument>(CONFIG.collections.setting, settingSchema);

export { Setting, SettingDocument, SettingInput, SettingDTO, Currency };
