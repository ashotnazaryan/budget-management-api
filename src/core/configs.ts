import dotenv from 'dotenv';

dotenv.config();

export const CONFIG = {
  port: process.env.PORT || '3001',
  env: process.env.NODE_ENV,
  clientID: process.env.GOOGLE_OUATH_CLIENT_ID || '',
  clientSecret: process.env.GOOGLE_OUATH_CLIENT_SECRET || '',
  clientUrl: process.env.CLIENT_URL || 'http://localhost:3000',
  cookieSessionSecretName: process.env.COOKIE_SECRET_NAME || '',
  cookieSessionSecretKey: process.env.COOKIE_SECRET_KEY || 'key',
  mongoUser: process.env.MONGO_ATLAS_CLUSTER_USERNAME || '',
  mongoPassword: process.env.MONGO_ATLAS_CLUSTER_PASSWORD || '',
  db: process.env.MONGO_ATLAS_CLUSTER_DB || '',
  routes: {
    loginSuccess: '/login/success',
    loginFailed: 'login/failed',
    logout: '/logout',
    google: '/google',
    googleCallback: '/google/callback',
    getSummary: '/',
    getBalance: '/balance',
    getDefaultCategories: '/defaultCategories',
    getTransactions: '/',
    addTransaction: '/transaction',
    getSettings: '/',
    addSetting: '/setting',
  },
  collections: {
    user: 'user',
    setting: 'setting',
    summary: 'summary',
    defaultCategories: 'defaultCategories',
    transactions: 'transactions',
  }
};
