import mongoose, { Document } from 'mongoose';
import { CONFIG } from '../core/configs';
import { CurrencyIso } from './setting';

const Schema = mongoose.Schema;

export interface Amount {
  net: number;
  gross: number;
  vatAmount: number;
  vatRate: number;
  currencyIso: CurrencyIso;
}

interface InvoiceInput {
  id: string;
  userId: string;
  name: string;
  salary: string;
  currencyIso: CurrencyIso;
  month: number;
  vatIncluded: boolean;
  sellerName: string;
  sellerAddress: string;
  sellerLocation: string;
  sellerVatID: string;
  sellerAccount: string;
  buyerName: string;
  buyerAddress: string;
  buyerLocation: string;
  buyerVatID: string;
  amount: Amount;
}

interface InvoiceDocument extends Document {
  id: string;
  userId: string;
  name: string;
  salary: string;
  currencyIso: CurrencyIso;
  month: number;
  vatIncluded: boolean;
  sellerName: string;
  sellerAddress: string;
  sellerLocation: string;
  sellerVatID: string;
  sellerAccount: string;
  buyerName: string;
  buyerAddress: string;
  buyerLocation: string;
  buyerVatID: string;
  amount: Amount;
}

const invoiceSchema = new Schema(
  {
    id: {
      type: Schema.Types.String
    },
    userId: {
      type: Schema.Types.String,
      required: true
    },
    name: {
      type: Schema.Types.String,
      required: true
    },
    salary: {
      type: Schema.Types.String,
      required: true
    },
    currencyIso: {
      type: Schema.Types.String,
      required: true
    },
    month: {
      type: Schema.Types.Number,
      required: true
    },
    vatIncluded: {
      type: Schema.Types.Boolean,
      required: true
    },
    sellerName: {
      type: Schema.Types.String,
      required: true
    },
    sellerAddress: {
      type: Schema.Types.String,
      required: true
    },
    sellerLocation: {
      type: Schema.Types.String,
      required: true
    },
    sellerVatID: {
      type: Schema.Types.String,
      required: true
    },
    sellerAccount: {
      type: Schema.Types.String,
      required: true
    },
    buyerName: {
      type: Schema.Types.String,
      required: true
    },
    buyerAddress: {
      type: Schema.Types.String,
      required: true
    },
    buyerLocation: {
      type: Schema.Types.String,
      required: true
    },
    buyerVatID: {
      type: Schema.Types.String,
      required: true
    },
    amount: {
      type: Schema.Types.Mixed,
      required: true
    }
  },
  {
    timestamps: false,
    collection: CONFIG.collections.invoices
  }
);

const Invoice = mongoose.model<InvoiceDocument>(CONFIG.collections.invoices, invoiceSchema);

export { Invoice, InvoiceDocument, InvoiceInput };
