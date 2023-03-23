import mongoose, { Schema, Model, Document } from 'mongoose';
import { CategoryType } from './category';
import { TransactionDTO } from './transaction';

export interface SummaryRequestDTO {
  amount: number;
  categoryId: string;
  name: string;
  type: CategoryType;
}

export interface SummaryDTO {
  incomes: number;
  expenses: number;
  balance: number;
  categoryTransactions: TransactionDTO[];
  // TODO: check this field
  _id?: string;
  userId?: string;
}

type SummaryDocument = Document & {
  userId?: string;
  incomes: number;
  expenses: number;
  balance: number;
  categoryTransactions: TransactionDTO[];
};

type SummaryInput = {
  userId: SummaryDocument['userId'];
  incomes: SummaryDocument['incomes'];
  expenses: SummaryDocument['expenses'];
  balance: SummaryDocument['balance'];
  categoryTransactions: SummaryDocument['categoryTransactions'];
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
    categoryTransactions: {
      type: Schema.Types.Array,
      required: true
    }
  },
  {
    collection: 'summary',
    timestamps: false
  }
);

const Summary: Model<SummaryDocument> = mongoose.model<SummaryDocument>('summary', summarysSchema);

export default Summary;
export { SummaryInput, SummaryDocument };
