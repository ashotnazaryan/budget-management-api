import dotenv from 'dotenv';
import { AuthenticateOptionsGoogle, StrategyOptions } from 'passport-google-oauth20';

dotenv.config();

export const CONFIG = {
  port: process.env.PORT || '3001',
  env: process.env.NODE_ENV,
  googleClientID: process.env.GOOGLE_OUATH_CLIENT_ID || '',
  googleClientSecret: process.env.GOOGLE_OUATH_CLIENT_SECRET || '',
  domain: process.env.DOMAIN || 'http://localhost:3001',
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
    getUser: '/',
    getSummary: '/',
    getBalance: '/balance',
    getTransactions: '/',
    getTransactionById: '/:id',
    editTransaction: '/:id',
    addTransaction: '/transaction',
    deleteTransaction: '/:id',
    getCategories: '/',
    createCategory: '/category',
    editCategory: '/:id',
    deleteCategory: '/:id',
    getCategoryById: '/:id',
    getAccounts: '/',
    createAccount: '/account',
    editAccount: '/:id',
    deleteAccount: '/:id',
    getAccountById: '/:id',
    getTransfers: '/',
    createTransfer: '/transfer',
    getTransferById: '/:id',
    editTransfer: '/:id',
    deleteTransfer: '/:id',
    getSettings: '/',
    addSetting: '/setting',
    reset: '/:userId/reset',
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
    transfers: 'transfers'
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