import mongoose, { Schema, Model, Document } from 'mongoose';

type SummaryDocument = Document & {
  incomes: number;
  expenses: number;
};

type SummaryInput = {
  incomes: SummaryDocument['incomes'];
  expenses: SummaryDocument['expenses'];
};

const summarysSchema = new Schema(
  {
    incomes: {
      type: Schema.Types.Number,
      required: true
    },
    expenses: {
      type: Schema.Types.Number,
      required: true
    }
  },
  {
    collection: 'summary',
    timestamps: true
  }
);

const Summary: Model<SummaryDocument> = mongoose.model<SummaryDocument>('summary', summarysSchema);

export { Summary, SummaryInput, SummaryDocument };
