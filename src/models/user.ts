import mongoose, { Document } from 'mongoose';
import { CONFIG } from '../core/configs';

const Schema = mongoose.Schema;

declare global {
  namespace Express {
    interface User extends PassportUser { }
  }
}

interface UserDocument extends Document {
  id: string;
  userId: string;
  fullName: string;
  avatar: string;
};

interface UserInput {
  id: string;
  userId: string;
  fullName: string;
  avatar: string;
}

interface PassportUser {
  id: string;
  userId: string;
  accessToken: string;
  refreshToken: string;
}

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

export { User, UserDocument, UserInput, PassportUser };
