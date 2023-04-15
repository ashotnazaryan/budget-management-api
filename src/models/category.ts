import mongoose, { Document } from 'mongoose';
import { CONFIG } from '../core/configs';

const Schema = mongoose.Schema;

export enum CategoryType {
  expense = 0,
  income = 1
}

export interface CategoryDocument extends Document {
  name: string;
  icon: string;
  type: CategoryType;
  id: string;
  userId?: string;
  isDefaultCategory?: boolean;
  nameKey?: string;
};

export interface CategoryInput {
  name: string;
  icon: string;
  type: CategoryType;
  id: string;
  userId?: string;
  isDefaultCategory?: boolean;
  nameKey?: string;
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
    },
    isDefaultCategory: {
      type: Schema.Types.Boolean
    },
    nameKey: {
      type: Schema.Types.String
    }
  },
  {
    timestamps: false,
    collection: CONFIG.collections.defaultCategories
  }
);

const categorySchema = new Schema(
  {
    userId: {
      type: Schema.Types.String,
      required: true
    },
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
    },
    isDefaultCategory: {
      type: Schema.Types.Boolean
    },
    nameKey: {
      type: Schema.Types.String
    }
  },
  {
    timestamps: false,
    collection: CONFIG.collections.categories
  }
);

const DefaultCategory = mongoose.model<CategoryDocument>(CONFIG.collections.defaultCategories, defaultCategorySchema);
const Category = mongoose.model<CategoryDocument>(CONFIG.collections.categories, categorySchema);

export { DefaultCategory, Category };
