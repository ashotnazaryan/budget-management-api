import express from 'express';
import cors from 'cors';
import { connectToDatabase } from './db-connection';
import { summaryRoute } from './routes/summary.route';

const port = process.env.PORT;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:3000', 'https://app-budget-management.netlify.app']
}));

app.use('/api/summary', summaryRoute());

app.get('/', (req, res) => {
  return res.json({ message: 'Hello World!' });
});

app.listen(port, async () => {
  await connectToDatabase();
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});