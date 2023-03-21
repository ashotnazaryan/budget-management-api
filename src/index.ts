import express from 'express';
import cors from 'cors';
import cookieSession from 'cookie-session';
import passport from 'passport';
import { connectToDatabase } from './config/db-connection';
import { summaryRoute } from './routes/summary.route';
import { authRoute } from './routes/auth.routes';
import './config/passport';

const port = process.env.PORT;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: remove this
app.use(
  cookieSession({ name: 'move_to_env', keys: ['move_to_env_key'], maxAge: 60 * 60 * 100, })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
  origin: ['http://localhost:3000', 'https://app-budget-management.netlify.app'],
  credentials: true
})
);

app.use('/api/summary', summaryRoute());
app.use('/api/auth', authRoute());

app.get('/', (req, res) => {
  return res.json({ message: 'Hello World!' });
});

app.listen(port, async () => {
  await connectToDatabase();
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});