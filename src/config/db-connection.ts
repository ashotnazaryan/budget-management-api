import mongoose from 'mongoose';
import { ServerApiVersion } from 'mongodb';
import { CONFIG } from './settings';

mongoose.Promise = global.Promise;

const connectToDatabase = async (): Promise<void> => {
  const options: mongoose.ConnectOptions = { serverApi: ServerApiVersion.v1 };

  await mongoose.connect(`mongodb+srv://${CONFIG.mongoUser}:${CONFIG.mongoPassword}@budget-management.ewiffuf.mongodb.net/${CONFIG.db}?retryWrites=true&w=majority`, options);
};

export { connectToDatabase };
