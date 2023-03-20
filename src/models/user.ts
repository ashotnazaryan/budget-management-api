import mongoose, { Document } from 'mongoose';

const Schema = mongoose.Schema;

export type UserDocument = Document & {
  googleId: string;
};

export interface UserInput {
  id: string;
  googleId: string;
  accessToken: string;
}

const userSchema = new Schema(
  {
    googleId: {
      type: Schema.Types.String,
      required: true
    }
  },
  {
    collection: 'user',
    timestamps: false
  }
);

const User = mongoose.model<UserDocument>('user', userSchema);

export default User;
