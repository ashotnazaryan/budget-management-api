import mongoose, { Document } from 'mongoose';
import { CONFIG } from '../core/configs';

const Schema = mongoose.Schema;

interface RateModel {
  code: string;
  value: number;
}

interface NBPResponse {
  effectiveDate: string;
  rates: {
    code: string;
    mid: number;
  }[];
}

interface RateInput {
  id?: string;
  date: string;
  rates: RateModel[];
}

interface RateDocument extends Document {
  id?: string;
  date: string;
  rates: RateModel[];
}

interface StartEndDate {
  startDate: string;
  endDate: string;
}

const regularRateSchema = new Schema(
  {
    id: {
      type: Schema.Types.String
    },
    date: {
      type: Schema.Types.String,
      required: true
    },
    rates: {
      type: Schema.Types.Array,
      required: true
    }
  },
  {
    timestamps: false,
    collection: CONFIG.collections.regularRates
  }
);

const invoiceRateSchema = new Schema(
  {
    id: {
      type: Schema.Types.String
    },
    date: {
      type: Schema.Types.String,
      required: true
    },
    rates: {
      type: Schema.Types.Array,
      required: true
    }
  },
  {
    timestamps: false,
    collection: CONFIG.collections.invoiceRates
  }
);

const RegularRate = mongoose.model<RateDocument>(CONFIG.collections.regularRates, regularRateSchema);
const InvoiceRate = mongoose.model<RateDocument>(CONFIG.collections.invoiceRates, invoiceRateSchema);

export { RegularRate, InvoiceRate, RateDocument, RateInput, RateModel, NBPResponse, StartEndDate };
