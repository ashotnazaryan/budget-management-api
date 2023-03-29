import mongoose, { Document } from 'mongoose';
import { CONFIG } from '../core/configs';

const Schema = mongoose.Schema;

export interface AccountDocument extends Document {
  name: string;
  icon: string;
  initialAmount: number;
  userId?: string;
};

export interface AccountInput {
  name: string;
  icon: string;
  initialAmount: number;
  userId?: string;
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
    initialAmount: {
      type: Schema.Types.Number,
      required: true
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
    initialAmount: {
      type: Schema.Types.Number,
      required: true
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
