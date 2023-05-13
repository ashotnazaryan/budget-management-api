import mongoose, { Document } from 'mongoose';
import { Profile as GoogleProfile } from 'passport-google-oauth20';
import { Profile as FacebookProfile } from 'passport-facebook';
import { CONFIG } from '../core/configs';

const Schema = mongoose.Schema;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface User extends PassportUser { }
  }
}

interface UserDocument extends Document {
  id: string;
  userId: string;
  fullName: string;
  avatar: string;
}

interface UserInput {
  id: string;
  userId: string;
  fullName: string;
  avatar?: string;
}

interface PassportUser {
  id: string;
  userId: string;
  accessToken: string;
  refreshToken: string;
}

type Provider = 'google' | 'facebook';
type Profile = GoogleProfile | FacebookProfile;

const userSchema = new Schema(
  {
    userId: {
      type: Schema.Types.String,
      required: true
    },
    fullName: {
      type: Schema.Types.String,
      required: true
    },
    avatar: {
      type: Schema.Types.String,
      required: true
    }
  },
  {
    timestamps: false,
    collection: CONFIG.collections.user
  }
);

const User = mongoose.model<UserDocument>(CONFIG.collections.user, userSchema);

export { User, UserDocument, UserInput, PassportUser, Provider, Profile };
