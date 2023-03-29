import mongoose, { Document } from 'mongoose';
import { CONFIG } from '../core/configs';

const Schema = mongoose.Schema;

export interface AccountDocument extends Document {
  id: string;
  name: string;
  icon: string;
};

export interface AccountInput {
  id: string;
  name: string;
  icon: string;
}

const defaultAccountSchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: true
    },
    icon: {
      type: Schema.Types.String,
      required: true
    }
  },
  {
    timestamps: false,
    collection: CONFIG.collections.defaultAccounts
  }
);

const DefaultAccount= mongoose.model<AccountDocument>(CONFIG.collections.defaultAccounts, defaultAccountSchema);

export { DefaultAccount };
