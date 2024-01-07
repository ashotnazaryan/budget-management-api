import mongoose, { Document } from 'mongoose';
import { CONFIG } from '../core/configs';
import { CurrencyIso } from './setting';

const Schema = mongoose.Schema;

interface ReportItem {
  month: number;
  currencyIso: CurrencyIso;
  value: number;
}

interface ReportInput {
  id: string;
  userId: string;
  reports: ReportItem[];
  total: number;
  limit: number | undefined;
}

interface ReportDocument extends Document {
  id: string;
  userId: string;
  reports: ReportItem[];
  total: number;
  limit: number | undefined;
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
    reports: {
      type: Schema.Types.Array,
      required: true
    },
    total: {
      type: Schema.Types.Number,
      required: true
    },
    limit: {
      type: Schema.Types.Number
    }
  },
  {
    timestamps: false,
    collection: CONFIG.collections.reports
  }
);

const Report = mongoose.model<ReportDocument>(CONFIG.collections.reports, reportSchema);

export { Report, ReportDocument, ReportInput };
