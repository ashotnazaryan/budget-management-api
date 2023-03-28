import mongoose, { Document } from 'mongoose';
import { CONFIG } from '../core/configs';

const Schema = mongoose.Schema;

interface Currency {
  iso: 'USD' | 'EUR' | 'PLN' | 'UAH' | 'AMD';
  name: 'US Dollar' | 'Euro' | 'Polish Zloty' | 'Ukrainian Hryvnia' | 'Armenian Dram';
  symbol: '$' | '€' | 'zł' | '₴' | '֏';
}

interface SettingDocument extends Document {
  currency: Currency;
  showDecimals: boolean;
  userId: string;
};

interface SettingInput {
  currency: Currency;
  showDecimals: boolean;
}

interface SettingDTO {
  currency: Currency;
  showDecimals: boolean;
}

const defaultCategorySchema = new Schema(
  {
    currency: {
      type: Schema.Types.Mixed as unknown as Currency,
      required: true
    },
    showDecimals: {
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

const Setting = mongoose.model<SettingDocument>(CONFIG.collections.setting, defaultCategorySchema);

export { Setting, SettingDocument, SettingInput, SettingDTO, Currency };
