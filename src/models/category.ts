import mongoose, { Document } from 'mongoose';
import { CONFIG } from '../core/configs';

const Schema = mongoose.Schema;

export enum CategoryType {
  expense = 0,
  income = 1
}

export interface CategoryDocument extends Document {
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
    timestamps: false,
    collection: CONFIG.collections.defaultCategories
  }
);

const DefaultCategory = mongoose.model<CategoryDocument>(CONFIG.collections.defaultCategories, defaultCategorySchema);

export { DefaultCategory };
