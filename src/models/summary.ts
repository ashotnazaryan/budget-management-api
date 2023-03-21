import mongoose, { Schema, Model, Document } from 'mongoose';

export enum CategoryType {
  income = 0,
  expense = 1
}

export interface SummaryRequestDTO {
  amount: number;
  categoryId: string;
  name: string;
  type: CategoryType;
}

export interface SummaryDTO {
  userId?: string;
  incomes: number;
  expenses: number;
  balance: number;
  transactions: TransactionDataDTO[];
  categoryTransactions: TransactionDataDTO[];
  // TODO: check this field
  _id?: string;
}

export interface TransactionDataDTO {
  // uuid: string;
  categoryId: string;
  type: CategoryType;
  name: string;
  amount: number;
  createdAt: Date;
}

type SummaryDocument = Document & {
  userId?: string;
  incomes: number;
  expenses: number;
  balance: number;
  transactions: TransactionDataDTO[];
  categoryTransactions: TransactionDataDTO[];
};

type SummaryInput = {
  userId: SummaryDocument['userId'];
  incomes: SummaryDocument['incomes'];
  expenses: SummaryDocument['expenses'];
  balance: SummaryDocument['balance'];
  transactions: SummaryDocument['transactions'];
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
    transactions: {
      type: Schema.Types.Array,
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

export { Summary, SummaryInput, SummaryDocument };
