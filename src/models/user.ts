import mongoose, { Document } from 'mongoose';
import { CONFIG } from '../core/configs';

const Schema = mongoose.Schema;

interface UserDocument extends Document {
  userId: string;
};

interface UserInput {
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
    }
  },
  {
    timestamps: false,
    collection: CONFIG.collections.user
  }
);

const User = mongoose.model<UserDocument>(CONFIG.collections.user, userSchema);

export { User, UserDocument, UserInput };
