import mongoose, { Document } from 'mongoose';
import { CONFIG } from '../core/configs';

const Schema = mongoose.Schema;

type CurrencyIso = 'USD' | 'EUR' | 'PLN' | 'UAH' | 'AMD';
type LocaleIso = 'en' | 'pl' | 'ru' | 'ua' | 'am';

export enum Period {
  day = 'day',
  week = 'week',
  month = 'month',
  year = 'year',
  allTime = 'allTime'
}

interface SettingDocument extends Document {
  userId: string;
  defaultAccount: string;
  showDecimals: boolean;
  defaultCurrency: CurrencyIso;
  defaultPeriod: Period;
  locale: LocaleIso;
  isDarkTheme?: boolean;
}

interface SettingInput {
  defaultAccount: string;
  showDecimals: boolean;
  defaultCurrency: CurrencyIso;
  defaultPeriod: Period;
  locale: LocaleIso;
  isDarkTheme?: boolean;
}

const settingSchema = new Schema(
  {
    userId: {
      type: Schema.Types.String,
      required: true
    },
    defaultCurrency: {
      type: Schema.Types.String,
      required: true
    },
    locale: {
      type: Schema.Types.String,
      required: true
    },
    showDecimals: {
      type: Schema.Types.Boolean,
      required: true
    },
    isDarkTheme: {
      type: Schema.Types.Boolean
    },
    defaultAccount: {
      type: Schema.Types.String
    },
    defaultPeriod: {
      type: Schema.Types.String
    },
  },
  {
    timestamps: false,
    collection: CONFIG.collections.setting
  }
);

const Setting = mongoose.model<SettingDocument>(CONFIG.collections.setting, settingSchema);

export { Setting, SettingDocument, SettingInput, CurrencyIso };
