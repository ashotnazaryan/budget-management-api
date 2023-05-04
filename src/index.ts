import express from 'express';
import cors from 'cors';
import path from 'path';
import session from 'express-session';
import passport from 'passport';
import { connectToDatabase } from './core/db-connection';
import { authRoute, userRoute, summaryRoute, transactionRoute, categoryRoute, settingRoute, accountRoute, transferRoute } from './routes';
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
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client')));

app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, '../client', 'index.html'));
});

app.use(session({
  secret: CONFIG.cookieSessionSecretName,
  resave: true,
  saveUninitialized: false,
  cookie: {
    maxAge: 24 * 60 * 60 * 100,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    httpOnly: true,
    domain: process.env.NODE_ENV === 'production' ? CONFIG.clientURL : undefined,
  }
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(cors(corsOptions));
app.use(setResponseHeaders);

app.use('/api/auth', authRoute());
app.use('/api/user', userRoute());
app.use('/api/summary', summaryRoute());
app.use('/api/categories', categoryRoute());
app.use('/api/accounts', accountRoute());
app.use('/api/transfers', transferRoute());
app.use('/api/transactions', transactionRoute());
app.use('/api/settings', settingRoute());

app.listen(CONFIG.port, async () => {
  await connectToDatabase();
  await createDefaultCollections();
});
