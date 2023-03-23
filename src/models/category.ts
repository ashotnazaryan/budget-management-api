import mongoose, { Document } from 'mongoose';

const Schema = mongoose.Schema;

export enum CategoryType {
  expense = 0,
  income = 1
}

export type CategoryDocument = Document & {
  id: string;
  name: string;
  icon: string;
  type: CategoryType;
};

export interface CategoryInput {
  id: string;
  name: string;
  icon: string;
  type: CategoryType;
}

const defaultCategorySchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: true
    },
    icon: {
      type: Schema.Types.String,
      required: true
    },
    type: {
      type: Schema.Types.Number,
      required: true
    }
  },
  {
    collection: 'defaultCategories',
    timestamps: false
  }
);

const DefaultCategory = mongoose.model<CategoryDocument>('defaultCategories', defaultCategorySchema);

export default DefaultCategory;
