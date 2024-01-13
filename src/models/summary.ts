import mongoose, { Schema, Model, Document } from 'mongoose';
import { CONFIG } from '../core/configs';
import { TransactionDTO } from './transaction';

interface SummaryDocument extends Document {
  incomes: number;
  expenses: number;
  profit: number;
  balance: number;
  categoryExpenseTransactions: TransactionDTO[];
  categoryIncomeTransactions: TransactionDTO[];
  userId?: string;
}

interface SummaryDTO {
  userId: SummaryDocument['userId'];
  incomes: SummaryDocument['incomes'];
  expenses: SummaryDocument['expenses'];
  profit: SummaryDocument['profit'];
  balance: SummaryDocument['balance'];
  categoryExpenseTransactions: SummaryDocument['categoryExpenseTransactions'];
  categoryIncomeTransactions: SummaryDocument['categoryIncomeTransactions'];
}

interface DateRange {
  fromDate: string;
  toDate: string;
}

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
    profit: {
      type: Schema.Types.Number,
      required: true
    },
    balance: {
      type: Schema.Types.Number,
      required: true
    },
    categoryExpenseTransactions: {
      type: Schema.Types.Array,
      required: true
    },
    categoryIncomeTransactions: {
      type: Schema.Types.Array,
      required: true
    }
  },
  {
    timestamps: false,
    collection: CONFIG.collections.summary
  }
);

const Summary: Model<SummaryDocument> = mongoose.model<SummaryDocument>(CONFIG.collections.summary, summarysSchema);

export { Summary, SummaryDTO, SummaryDocument, DateRange };
