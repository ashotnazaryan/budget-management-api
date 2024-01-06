import { InvoiceDocument, ReportDocument, ReportInput } from '../models';

export const mapReports = (reports: ReportDocument[], userId: string): ReportInput[] => {
  return reports.map((report) => mapReport(report, userId));
};

export const mapReport = (report: ReportDocument, userId: string): ReportInput => {
  return {
    userId,
    id: report.get('_id'),
    month: report.month,
    currencyIso: report.currencyIso,
    value: report.value
  };
};

export const mapInvoicesToReports = (invoices: InvoiceDocument[], userId: string): Omit<ReportInput, 'id'>[] => {
  return invoices.map((invoice) => {
    return {
      userId,
      month: invoice.month,
      currencyIso: invoice.amount.currencyIso,
      value: invoice.amount.gross
    };
  });
};
