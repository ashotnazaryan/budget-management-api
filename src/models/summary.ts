import mongoose, { Schema, Model, Document } from 'mongoose';
import { CONFIG } from '../core/configs';
import { CategoryType } from './category';
import { TransactionDTO } from './transaction';

interface SummaryRequestDTO {
  amount: number;
  categoryId: string;
  name: string;
  type: CategoryType;
}

interface SummaryDTO {
  incomes: number;
  expenses: number;
  balance: number;
  categoryExpenseTransactions: TransactionDTO[];
  userId?: string;
}

interface SummaryDocument extends Document {
  userId?: string;
  incomes: number;
  expenses: number;
  balance: number;
  categoryExpenseTransactions: TransactionDTO[];
};

interface SummaryInput {
  userId: SummaryDocument['userId'];
  incomes: SummaryDocument['incomes'];
  expenses: SummaryDocument['expenses'];
  balance: SummaryDocument['balance'];
  categoryExpenseTransactions: SummaryDocument['categoryExpenseTransactions'];
};

const summarysSchema = new Schema(
  {
    userId: {
      type: Schema.Types.String,
      required: true
    },
    incomes: {
      type: Schema.Types.Number,
      required: true
    },
    expenses: {
      type: Schema.Types.Number,
      required: true
    },
    balance: {
      type: Schema.Types.Number,
      required: true
    },
    categoryExpenseTransactions: {
      type: Schema.Types.Array as unknown as SummaryDocument['categoryExpenseTransactions'],
      required: true
    }
  },
  {
    timestamps: false,
    collection: CONFIG.collections.summary
  }
);

const Summary: Model<SummaryDocument> = mongoose.model<SummaryDocument>(CONFIG.collections.summary, summarysSchema);

export { Summary, SummaryInput, SummaryDTO, SummaryRequestDTO, SummaryDocument };
