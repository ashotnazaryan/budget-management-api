import mongoose, { Document } from 'mongoose';
import { CONFIG } from '../core/configs';
import { CurrencyIso } from './setting';

const Schema = mongoose.Schema;

export interface AccountDocument extends Document {
  name: string;
  icon: string;
  balance: number;
  currencyIso: CurrencyIso;
  id: string;
  userId?: string;
  isDefaultAccount?: boolean;
  nameKey?: string;
}

export interface AccountDTO {
  name: string;
  icon: string;
  balance: number;
  currencyIso: CurrencyIso;
  id: string;
  userId?: string;
  isDefaultAccount?: boolean;
  nameKey?: string;
}

const defaultAccountSchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: true
    },
    icon: {
      type: Schema.Types.String,
      required: true
    },
    currencyIso: {
      type: Schema.Types.String,
      required: true
    },
    balance: {
      type: Schema.Types.Number,
      required: true
    },
    isDefaultAccount: {
      type: Schema.Types.Boolean
    },
    nameKey: {
      type: Schema.Types.String
    }
  },
  {
    timestamps: false,
    collection: CONFIG.collections.defaultAccounts
  }
);

const accountSchema = new Schema(
  {
    userId: {
      type: Schema.Types.String,
      required: true
    },
    name: {
      type: Schema.Types.String,
      required: true
    },
    icon: {
      type: Schema.Types.String,
      required: true
    },
    currencyIso: {
      type: Schema.Types.String,
      required: true
    },
    balance: {
      type: Schema.Types.Number,
      required: true
    },
    isDefaultAccount: {
      type: Schema.Types.Boolean
    },
    nameKey: {
      type: Schema.Types.String
    }
  },
  {
    timestamps: false,
    collection: CONFIG.collections.accounts
  }
);

const DefaultAccount = mongoose.model<AccountDocument>(CONFIG.collections.defaultAccounts, defaultAccountSchema);
const Account = mongoose.model<AccountDocument>(CONFIG.collections.accounts, accountSchema);

export { DefaultAccount, Account };
