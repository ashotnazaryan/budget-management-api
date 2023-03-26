import mongoose, { Document } from 'mongoose';
import { CONFIG } from '../core/configs';
import { CategoryType } from './category';

const Schema = mongoose.Schema;

interface TransactionDTO {
  categoryId: string; // TODO: check
  userId: string;
  type: CategoryType;
  name: string;
  amount: number;
  createdAt: Date;
}

interface TransactionDocument extends Document {
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
    timestamps: false,
    collection: CONFIG.collections.transactions
  }
);

const Transaction = mongoose.model<TransactionDocument>(CONFIG.collections.transactions, transactionSchema);

export { Transaction, TransactionDocument, TransactionDTO };
