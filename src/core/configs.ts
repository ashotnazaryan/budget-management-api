import dotenv from 'dotenv';
import { AuthenticateOptionsGoogle, StrategyOptions } from 'passport-google-oauth20';
import { StrategyOption } from 'passport-facebook';

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
  callbackURL: CONFIG.env === 'production' ? `${CONFIG.clientURL}/api/auth${CONFIG.routes.googleCallback}` : `/api/auth${CONFIG.routes.googleCallback}`,
  scope: ['profile'],
  clientID: CONFIG.googleClientID,
  clientSecret: CONFIG.googleClientSecret,
  accessType: 'offline',
  prompt: 'consent'
};

export const FACEBOOK_STRATEGY_OPTIONS: FacebookStrategyOptions = {
  callbackURL: CONFIG.env === 'production' ? `${CONFIG.clientURL}/api/auth${CONFIG.routes.facebookCallback}` : `/api/auth${CONFIG.routes.facebookCallback}`,
  profileFields: ['id', 'displayName', 'photos', 'email'],
  clientID: CONFIG.facebookClientID,
  clientSecret: CONFIG.facebookClientSecret,
  authType: 'reauthenticate',
  display: 'popup'
};

type GoogleStrategyOptions = StrategyOptions & AuthenticateOptionsGoogle;
type FacebookStrategyOptions = StrategyOption;