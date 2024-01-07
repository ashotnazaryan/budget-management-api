import { Request, Response } from 'express';
import { Invoice, Report, Setting } from '../models';
import { mapInvoicesToReport, mapReport } from '../helpers';

const getReports = async (request: Request, response: Response) => {
  const userId = request.user?.userId;

  if (!userId) {
    return response.status(400).json({ message: 'User ID is not provided', status: 400 });
  }

  try {
    const invoices = await Invoice.find({ userId });
    const setting = await Setting.findOne({ userId });

    if (!invoices.length) {
      return response.status(200).json({});
    }

    if (!setting) {
      return response.status(404).json({ message: 'Setting not found', status: 404 });
    }

    const newReport = mapInvoicesToReport(invoices, userId, setting.defaultCurrency);
    await Report.deleteOne({ userId });
    await Report.create(newReport);
    const report = await Report.findOne({ userId });

    if (report) {
      return response.status(200).json(mapReport(report, userId));
    }

    return response.status(404).json({ message: 'Report not found', status: 404 });
  } catch (error) {
    return response.status(500).json({ message: 'Internal server error', status: 500 });
  }
};

export {
  getReports
};
