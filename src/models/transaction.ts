import mongoose, { Document } from 'mongoose';
import { CONFIG } from '../core/configs';
import { CategoryType } from './category';

const Schema = mongoose.Schema;

interface TransactionRequestRequestDTO {
  amount: number;
  categoryId: string;
  name: string;
  type: CategoryType;
  icon: string;
  accountId: string;
}

interface TransactionInput {
  categoryId: string;
  userId: string;
  type: CategoryType;
  name: string;
  amount: number;
  percentValue: number;
  createdAt: Date;
  icon: string;
  accountId: string;
}

interface TransactionDocument extends Document {
  categoryId: string;
  userId: string;
  type: CategoryType;
  name: string;
  amount: number;
  percentValue: number;
  createdAt: Date;
  icon: string;
  accountId: string;
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
      type: Schema.Types.Number as unknown as CategoryType,
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
    }
  },
  {
    timestamps: false,
    collection: CONFIG.collections.transactions
  }
);

const Transaction = mongoose.model<TransactionDocument>(CONFIG.collections.transactions, transactionSchema);

export { Transaction, TransactionDocument, TransactionInput, TransactionRequestRequestDTO };
