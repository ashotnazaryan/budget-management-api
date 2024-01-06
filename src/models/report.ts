import mongoose, { Document } from 'mongoose';
import { CONFIG } from '../core/configs';
import { CurrencyIso } from './setting';

const Schema = mongoose.Schema;

interface ReportInput {
  id: string;
  userId: string;
  month: number;
  currencyIso: CurrencyIso;
  value: number;
}

interface ReportDocument extends Document {
  id: string;
  userId: string;
  month: number;
  value: number;
  currencyIso: CurrencyIso;
}

const reportSchema = new Schema(
  {
    id: {
      type: Schema.Types.String
    },
    userId: {
      type: Schema.Types.String,
      required: true
    },
    month: {
      type: Schema.Types.Number,
      required: true
    },
    currencyIso: {
      type: Schema.Types.String,
      required: true
    },
    value: {
      type: Schema.Types.Number,
      required: true
    },
  },
  {
    timestamps: false,
    collection: CONFIG.collections.reports
  }
);

const Report = mongoose.model<ReportDocument>(CONFIG.collections.reports, reportSchema);

export { Report, ReportDocument, ReportInput };
