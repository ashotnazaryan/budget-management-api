import mongoose from 'mongoose';
import { MongoClientOptions, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';

mongoose.Promise = global.Promise;
dotenv.config();

const user = process.env.MONGO_ATLAS_CLUSTER_USERNAME;
const password = process.env.MONGO_ATLAS_CLUSTER_PASSWORD;
const db = process.env.MONGO_ATLAS_CLUSTER_DB;

const connectToDatabase = async (): Promise<void> => {
  const options: MongoClientOptions = { serverApi: ServerApiVersion.v1 };

  await mongoose.connect(`mongodb+srv://${user}:${password}@budget-management.ewiffuf.mongodb.net/${db}?retryWrites=true&w=majority`, options);
};

export { connectToDatabase };
