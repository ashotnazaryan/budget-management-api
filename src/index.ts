import express from 'express';
import cors from 'cors';
import cookieSession from 'cookie-session';
import passport from 'passport';
import { connectToDatabase } from './config/db-connection';
import { summaryRoute } from './routes/summary.route';
import { transactionRoute } from './routes/transaction.route';
import { authRoute } from './routes/auth.routes';
import { categoryRoute } from './routes/category.route';
import './config/passport';

const port = process.env.PORT || 'http://localhost:3000';
const cookieSessionSecretName = process.env.COOKIE_SECRET_NAME;
const cookieSessionSecretKey = process.env.COOKIE_SECRET_KEY || 'key';
const app = express();

app.set('trust proxy', true);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  cookieSession({
    name: cookieSessionSecretName,
    keys: [cookieSessionSecretKey],
    maxAge: 24 * 60 * 60 * 100,
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
    signed: true,
    overwrite: true
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
  origin: ['http://localhost:3000', 'https://app-budget-management.netlify.app'],
  credentials: true
})
);

app.use('/api/summary', summaryRoute());
app.use('/api/category', categoryRoute());
app.use('/api/transaction', transactionRoute());
app.use('/api/auth', authRoute());

app.get('/', (req, res) => {
  return res.json({ message: 'Hello World!' });
});

app.listen(port, async () => {
  await connectToDatabase();
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});