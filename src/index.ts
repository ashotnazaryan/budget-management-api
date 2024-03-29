import express from 'express';
import cors from 'cors';
import path from 'path';
import cookieSession from 'cookie-session';
import passport from 'passport';
import compression from 'compression';
import { connectToDatabase } from './core/db-connection';
import {
  authRoute,
  userRoute,
  summaryRoute,
  transactionRoute,
  categoryRoute,
  settingRoute,
  accountRoute,
  transferRoute,
  profileRoute,
  invoiceRoute,
  rateRoute,
  reportRoute
} from './routes';
import { createDefaultCollections } from './services';
import { setResponseHeaders } from './middleware';
import { CONFIG } from './core/configs';
import './core/passport';

const app = express();
const corsOptions = {
  origin: [CONFIG.clientURL],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true
};

app.set('trust proxy', true);
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client')));

app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, '../client', 'index.html'));
});

app.use(
  cookieSession({
    name: CONFIG.cookieSessionSecretName,
    keys: [CONFIG.cookieSessionSecretKey],
    maxAge: 24 * 60 * 60 * 100,
    secure: CONFIG.env === 'production',
    sameSite: 'lax',
    httpOnly: true,
    domain: CONFIG.domain
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(cors(corsOptions));
app.use(setResponseHeaders);

app.use('/api/auth', authRoute());
app.use('/api/user', userRoute());
app.use('/api/profile', profileRoute());
app.use('/api/summary', summaryRoute());
app.use('/api/categories', categoryRoute());
app.use('/api/accounts', accountRoute());
app.use('/api/transfers', transferRoute());
app.use('/api/transactions', transactionRoute());
app.use('/api/invoices', invoiceRoute());
app.use('/api/reports', reportRoute());
app.use('/api/rates', rateRoute());
app.use('/api/settings', settingRoute());

app.listen(CONFIG.port, async () => {
  await connectToDatabase();
  await createDefaultCollections();
});
