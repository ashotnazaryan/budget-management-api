import { VAT_LIMIT } from '../constants';
import { CurrencyIso, InvoiceDocument, ReportDocument, ReportDTO } from '../models';

export const mapReport = (report: ReportDocument, userId: string): ReportDTO => {
  return {
    userId,
    id: report.get('_id'),
    reports: report.reports,
    total: report.total,
    limit: report.limit
  };
};

export const mapInvoicesToReport = (invoices: InvoiceDocument[], userId: string, defaultCurrency: CurrencyIso): Omit<ReportDTO, 'id'> => {
  return {
    userId,
    limit: VAT_LIMIT[defaultCurrency],
    total: invoices.reduce((acc, curr) => {
      return acc + curr.amount.gross;
    }, 0),
    reports: invoices.map((invoice) => {
      return {
        month: invoice.month,
        currencyIso: invoice.amount.currencyIso,
        value: invoice.amount.gross
      };
    })
  };
};
