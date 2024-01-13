import mongoose, { Document } from 'mongoose';
import { CONFIG } from '../core/configs';
import { AccountDTO } from './account';

const Schema = mongoose.Schema;

export interface TransferDocument extends Document {
  id: string;
  fromAccount: AccountDTO['id'];
  toAccount: AccountDTO['id'];
  amount: number;
  createdAt: Date;
  userId?: string;
}

export interface TransferDTO {
  id: string;
  fromAccount: AccountDTO['id'];
  toAccount: AccountDTO['id'];
  amount: number;
  createdAt: Date;
  userId?: string;
}

const transferSchema = new Schema(
  {
    userId: {
      type: Schema.Types.String,
      required: true
    },
    fromAccount: {
      type: Schema.Types.String,
      required: true
    },
    toAccount: {
      type: Schema.Types.String,
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
    collection: CONFIG.collections.transfers
  }
);

const Transfer = mongoose.model<TransferDocument>(CONFIG.collections.transfers, transferSchema);

export { Transfer };
