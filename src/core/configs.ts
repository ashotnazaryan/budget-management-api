import dotenv from 'dotenv';
import { AuthenticateOptionsGoogle, StrategyOptions } from 'passport-google-oauth20';
import { StrategyOption, AuthenticateOptions } from 'passport-facebook';

dotenv.config();

export const CONFIG = {
  port: process.env.PORT || '3001',
  env: process.env.NODE_ENV,
  googleClientID: process.env.GOOGLE_OUATH_CLIENT_ID || '',
  googleClientSecret: process.env.GOOGLE_OUATH_CLIENT_SECRET || '',
  facebookClientID: process.env.FACEBOOK_OUATH_CLIENT_ID || '',
  facebookClientSecret: process.env.FACEBOOK_OUATH_CLIENT_SECRET || '',
  clientURL: process.env.CLIENT_URL || 'http://localhost:3000',
  domain: process.env.DOMAIN,
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
    facebook: '/facebook',
    facebookCallback: '/facebook/callback',
    getUser: '/',
    getSummary: '/',
    getBalance: '/balance',
    getTransactions: '/',
    getTransactionById: '/:id',
    editTransaction: '/:id',
    createTransaction: '/transaction',
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
    getProfile: '/',
    editProfile: '/',
    getInvoices: '/',
    createInvoice: '/invoice',
    getInvoiceById: '/:id',
    editInvoice: '/:id',
    deleteInvoice: '/:id',
    reset: '/:userId/reset',
    accessToken: '/access-token'
  },
  collections: {
    user: 'user',
    profile: 'profile',
    setting: 'setting',
    summary: 'summary',
    defaultCategories: 'defaultCategories',
    defaultAccounts: 'defaultAccounts',
    categories: 'categories',
    accounts: 'accounts',
    transactions: 'transactions',
    transfers: 'transfers',
    invoices: 'invoices'
  }
};

export const GOOGLE_STRATEGY_OPTIONS: GoogleStrategyOptions = {
  callbackURL: CONFIG.env === 'production' ? `${CONFIG.clientURL}/api/auth${CONFIG.routes.googleCallback}` : `/api/auth${CONFIG.routes.googleCallback}`,
  scope: ['profile'],
  clientID: CONFIG.googleClientID,
  clientSecret: CONFIG.googleClientSecret,
  accessType: 'offline'
};

export const FACEBOOK_STRATEGY_OPTIONS: FacebookStrategyOptions = {
  callbackURL: CONFIG.env === 'production' ? `${CONFIG.clientURL}/api/auth${CONFIG.routes.facebookCallback}` : `/api/auth${CONFIG.routes.facebookCallback}`,
  profileFields: ['id', 'displayName', 'photos', 'email'],
  clientID: CONFIG.facebookClientID,
  clientSecret: CONFIG.facebookClientSecret
};

export const MAX_TRANSACTION_AMOUNT = 1000000;
export const MAX_TRANSFER_AMOUNT = 1000000;
export const MAX_ACCOUNTS_PER_USER = 5;
export const MAX_CATEGORIES_PER_USER = 50;
export const MAX_TRANSACTIONS_PER_USER = 500;
export const MAX_TRANSFERS_PER_USER = 500;
export const MAX_INVOICES_PER_USER = 50;

type GoogleStrategyOptions = StrategyOptions & AuthenticateOptionsGoogle;
type FacebookStrategyOptions = StrategyOption & AuthenticateOptions;