import mongoose, { Document } from 'mongoose';
import { CONFIG } from '../core/configs';

const Schema = mongoose.Schema;

export interface ProfileDocument extends Document {
  id: string;
  userId: string;
  streetAddress?: string;
  streetAddressLine?: string;
  city?: string;
  region?: string;
  zipCode?: string;
  countryCode?: string;
  taxId?: string;
  accountNumber?: string;
}

export interface ProfileInput {
  id: string;
  userId: string;
  streetAddress?: string;
  streetAddressLine?: string;
  city?: string;
  region?: string;
  zipCode?: string;
  countryCode?: string;
  taxId?: string;
  accountNumber?: string;
}

const profileSchema = new Schema(
  {
    id: {
      type: Schema.Types.String
    },
    userId: {
      type: Schema.Types.String
    },
    streetAddress: {
      type: Schema.Types.String
    },
    streetAddressLine: {
      type: Schema.Types.String
    },
    city: {
      type: Schema.Types.String
    },
    region: {
      type: Schema.Types.String
    },
    zipCode: {
      type: Schema.Types.String
    },
    countryCode: {
      type: Schema.Types.String
    },
    taxId: {
      type: Schema.Types.String
    },
    accountNumber: {
      type: Schema.Types.String
    }
  },
  {
    timestamps: false,
    collection: CONFIG.collections.profile
  }
);

const Profile = mongoose.model<ProfileDocument>(CONFIG.collections.profile, profileSchema);

export { Profile };
