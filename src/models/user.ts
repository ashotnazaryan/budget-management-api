import mongoose, { Document } from 'mongoose';

const Schema = mongoose.Schema;

export type UserDocument = Document & {
  userId: string;
};

export interface UserInput {
  id: string;
  userId: string;
  accessToken: string;
}

const userSchema = new Schema(
  {
    userId: {
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

export { User };
