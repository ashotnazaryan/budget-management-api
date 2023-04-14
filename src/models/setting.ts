import mongoose, { Document } from 'mongoose';
import { CONFIG } from '../core/configs';

const Schema = mongoose.Schema;

type CurrencyIso = 'USD' | 'EUR' | 'PLN' | 'UAH' | 'AMD';
type LanguageIso = 'en' | 'ru';

interface SettingDocument extends Document {
  userId: string;
  defaultAccount: string;
  showDecimals: boolean;
  isDarkTheme: boolean;
  defaultCurrency: CurrencyIso;
  language: LanguageIso;
};

interface SettingInput {
  defaultAccount: string;
  showDecimals: boolean;
  isDarkTheme: boolean;
  defaultCurrency: CurrencyIso;
  language: LanguageIso;
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
    language: {
      type: Schema.Types.String,
      required: true
    },
    showDecimals: {
      type: Schema.Types.Boolean,
      required: true
    },
    isDarkTheme: {
      type: Schema.Types.Boolean,
      required: true
    },
    defaultAccount: {
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
