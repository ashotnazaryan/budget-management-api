import mongoose, { Document } from 'mongoose';
import { CONFIG } from '../core/configs';
import { CategoryType } from './category';
import { AccountDTO } from './account';
import { CurrencyIso } from './setting';

const Schema = mongoose.Schema;

interface TransactionDTO {
  userId: string;
  categoryId: string;
  accountId: string;
  type: CategoryType;
  name: string;
  amount: number;
  currencyIso: CurrencyIso;
  percentValue: number;
  createdAt: Date;
  icon: string;
  id: string;
  accountName?: AccountDTO['name'];
  accountIcon?: AccountDTO['icon'];
  nameKey?: string;
  accountNameKey?: AccountDTO['nameKey'] | null;
  note?: string;
}

interface TransactionDocument extends Document {
  userId: string;
  categoryId: string;
  accountId: string;
  type: CategoryType;
  name: string;
  amount: number;
  currencyIso: CurrencyIso;
  percentValue: number;
  createdAt: Date;
  icon: string;
  id: string;
  accountName?: AccountDTO['name'];
  accountIcon?: AccountDTO['icon'];
  nameKey?: string;
  accountNameKey?: AccountDTO['nameKey'];
  note?: string;
}

const transactionSchema = new Schema(
  {
    categoryId: {
      type: Schema.Types.String,
      required: true
    },
    userId: {
      type: Schema.Types.String,
      required: true
    },
    name: {
      type: Schema.Types.String,
      required: true
    },
    type: {
      type: Schema.Types.Number,
      required: true
    },
    amount: {
      type: Schema.Types.Number,
      required: true
    },
    currencyIso: {
      type: Schema.Types.String,
      required: true
    },
    percentValue: {
      type: Schema.Types.Number
    },
    createdAt: {
      type: Schema.Types.Date,
      required: true
    },
    icon: {
      type: Schema.Types.String,
      required: true
    },
    accountId: {
      type: Schema.Types.String,
      required: true
    },
    accountName: {
      type: Schema.Types.String
    },
    accountIcon: {
      type: Schema.Types.String
    },
    nameKey: {
      type: Schema.Types.String
    },
    accountNameKey: {
      type: Schema.Types.String
    },
    note: {
      type: Schema.Types.String
    }
  },
  {
    timestamps: false,
    collection: CONFIG.collections.transactions
  }
);

const Transaction = mongoose.model<TransactionDocument>(CONFIG.collections.transactions, transactionSchema);

export { Transaction, TransactionDocument, TransactionDTO };
