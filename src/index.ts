import express from 'express';
import cors from 'cors';
import cookieSession from 'cookie-session';
import passport from 'passport';
import { connectToDatabase } from './config/db-connection';
import { authRoute, summaryRoute, transactionRoute, categoryRoute } from './routes';
import './config/passport';
import { CONFIG } from './config/settings';

const app = express();
const corsOptions = {
  origin: [CONFIG.clientUrl],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true
};

app.set('trust proxy', true);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cookieSession({
    name: CONFIG.cookieSessionSecretName,
    keys: [CONFIG.cookieSessionSecretKey],
    maxAge: 24 * 60 * 60 * 100,
    // secure: CONFIG.env === 'production', // TODO: enable if client and server are under the same domain
    httpOnly: true,
    // sameSite: CONFIG.env === 'production' ? 'none' : 'lax', // TODO: check this if client and server are under the same domain
    signed: true,
    overwrite: true
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(cors(corsOptions));
// app.options('*', cors(corsOptions));
app.use('/api/summary', summaryRoute());
app.use('/api/category', categoryRoute());
app.use('/api/transaction', transactionRoute());
app.use('/api/auth', authRoute());

app.get('/', (req, res) => {
  return res.json({ message: 'Hello World!' });
});

app.listen(CONFIG.port, async () => {
  await connectToDatabase();
  console.log(`⚡️[server]: Server is running at http://localhost:${CONFIG.port}`);
});