import express from 'express';
import cors from 'cors';
import session from 'express-session';
import passport from 'passport';
import { connectToDatabase } from './core/db-connection';
import { authRoute, summaryRoute, transactionRoute, categoryRoute, settingRoute } from './routes';
import { CONFIG } from './core/configs';
import './core/passport';

const app = express();
const corsOptions = {
  origin: [CONFIG.clientUrl],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true
};

app.set('trust proxy', true);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
  secret: CONFIG.cookieSessionSecretName,
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 24 * 60 * 60 * 100,
    secure: CONFIG.env === 'production',
    httpOnly: true,
    sameSite: CONFIG.env === 'production' ? 'none' : 'lax', // TODO: change this to true/strict when both client and server are hosted under the same domain
  }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(cors(corsOptions));
app.use('/api/auth', authRoute());
app.use('/api/summary', summaryRoute());
app.use('/api/category', categoryRoute());
app.use('/api/transactions', transactionRoute());
app.use('/api/settings', settingRoute());

app.get('/', (req, res) => {
  return res.json({ message: 'Hello World!' });
});

app.listen(CONFIG.port, async () => {
  await connectToDatabase();
  console.log(`⚡️[server]: Server is running at http://localhost:${CONFIG.port}`);
});