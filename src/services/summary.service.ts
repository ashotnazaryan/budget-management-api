import { Request, Response } from 'express';
import { Summary } from '../models/summary';

const getSummary = async (req: Request, res: Response) => {
  try {
    const summary = await Summary.find();

    return res.status(200).json({ data: summary });
  } catch {
    res.status(404);
  }
};

export { getSummary };
