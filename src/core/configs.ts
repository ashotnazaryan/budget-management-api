import dotenv from 'dotenv';
import { AuthenticateOptionsGoogle, StrategyOptions } from 'passport-google-oauth20';

dotenv.config();

export const CONFIG = {
  port: process.env.PORT || '3001',
  env: process.env.NODE_ENV,
  googleClientID: process.env.GOOGLE_OUATH_CLIENT_ID || '',
  googleClientSecret: process.env.GOOGLE_OUATH_CLIENT_SECRET || '',
  clientUrl: process.env.CLIENT_URL || 'http://localhost:3000',
  cookieSessionSecretName: process.env.COOKIE_SECRET_NAME || '',
  cookieSessionSecretKey: process.env.COOKIE_SECRET_KEY || 'key',
  mongoUser: process.env.MONGO_ATLAS_CLUSTER_USERNAME || '',
  mongoPassword: process.env.MONGO_ATLAS_CLUSTER_PASSWORD || '',
  db: process.env.MONGO_ATLAS_CLUSTER_DB || '',
  routes: {
    loginSuccess: '/login/success',
    loginFailed: '/login/failed',
    logout: '/logout',
    google: '/google',
    googleCallback: '/google/callback',
    getSummary: '/',
    getBalance: '/balance',
    getDefaultCategories: '/default-categories',
    getDefaultAccounts: '/default-accounts',
    getTransactions: '/',
    addTransaction: '/transaction',
    createAccount: '/account',
    getCategories: '/',
    createCategory: '/category',
    editCategory: '/:categoryId',
    getCategoryById: '/:categoryId',
    getAccounts: '/',
    editAccount: '/:accountId',
    getAccountById: '/:accountId',
    getSettings: '/',
    addSetting: '/setting',
    deleteAll: '/:userId/delete-all',
    accessToken: '/access-token'
  },
  collections: {
    user: 'user',
    setting: 'setting',
    summary: 'summary',
    defaultCategories: 'defaultCategories',
    defaultAccounts: 'defaultAccounts',
    categories: 'categories',
    accounts: 'accounts',
    transactions: 'transactions',
  }
};

export const GOOGLE_STRATEGY_OPTIONS: GoogleStrategyOptions = {
  callbackURL: `/api/auth${CONFIG.routes.googleCallback}`,
  scope: ['profile'],
  clientID: CONFIG.googleClientID,
  clientSecret: CONFIG.googleClientSecret,
  accessType: 'offline',
  prompt: 'consent'
};

type GoogleStrategyOptions = StrategyOptions & AuthenticateOptionsGoogle;