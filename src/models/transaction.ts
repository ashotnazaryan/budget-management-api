import mongoose, { Document } from 'mongoose';
import { CONFIG } from '../core/configs';
import { CategoryInput, CategoryType } from './category';
import { AccountInput } from './account';

const Schema = mongoose.Schema;

interface TransactionInput {
  userId: string;
  categoryId: string;
  accountId: string;
  type: CategoryType;
  name: string;
  amount: number;
  percentValue: number;
  createdAt: Date;
  icon: string;
  id?: string;
  accountName?: AccountInput['name'];
  accountIcon?: AccountInput['icon'];
}

interface TransactionDocument extends Document {
  userId: string;
  categoryId: string;
  accountId: string;
  type: CategoryType;
  name: string;
  amount: number;
  percentValue: number;
  createdAt: Date;
  icon: string;
  id?: string;
  accountName?: AccountInput['name'];
  accountIcon?: AccountInput['icon'];
};

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
    percentValue: {
      type: Schema.Types.Number,
      required: false
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
    }
  },
  {
    timestamps: false,
    collection: CONFIG.collections.transactions
  }
);

const Transaction = mongoose.model<TransactionDocument>(CONFIG.collections.transactions, transactionSchema);

export { Transaction, TransactionDocument, TransactionInput };
