import { Request, Response } from 'express';
import { Invoice, Report } from '../models';
import { mapInvoicesToReports, mapReports } from '../helpers';

const getReports = async (request: Request, response: Response) => {
  const userId = request.user?.userId;

  if (!userId) {
    return response.status(400).json({ message: 'User ID is not provided', status: 400 });
  }

  try {
    const invoices = await Invoice.find({ userId });

    if (!invoices.length) {
      return response.status(200).json([]);
    }

    const newReports = mapInvoicesToReports(invoices, userId);
    await Report.deleteMany({ userId });
    await Report.insertMany(newReports);
    const reports = await Report.find({ userId });

    return response.status(200).json(mapReports(reports, userId));
  } catch (error) {
    return response.status(500).json({ message: 'Internal server error', status: 500 });
  }
};

export {
  getReports
};
