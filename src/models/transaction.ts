import mongoose, { Document } from 'mongoose';
import { CategoryType } from './category';

const Schema = mongoose.Schema;

export interface TransactionDTO {
  categoryId: string; // TODO: check
  userId: string;
  type: CategoryType;
  name: string;
  amount: number;
  createdAt: Date;
}

type TransactionDocument = Document & {
  categoryId: string;  // TODO: check
  userId: string;
  type: CategoryType;
  name: string;
  amount: number;
  createdAt: Date;
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
    createdAt: {
      type: Schema.Types.Date,
      required: true
    }
  },
  {
    collection: 'transactions',
    timestamps: false
  }
);

const Transaction = mongoose.model<TransactionDocument>('transactions', transactionSchema);

export { Transaction, TransactionDocument };
