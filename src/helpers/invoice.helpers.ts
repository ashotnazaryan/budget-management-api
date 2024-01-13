import { InvoiceDocument, InvoiceDTO } from '../models';

export const mapInvoices = (invoices: InvoiceDocument[], userId: string): InvoiceDTO[] => {
  return invoices.map((invoice) => mapInvoice(invoice, userId));
};

export const mapInvoice = (invoice: InvoiceDocument, userId: string): InvoiceDTO => {
  return {
    userId,
    id: invoice.get('_id'),
    name: invoice.name,
    salary: invoice.salary,
    currencyIso: invoice.currencyIso,
    month: invoice.month,
    createdAt: invoice.createdAt,
    vatIncluded: invoice.vatIncluded,
    sellerName: invoice.sellerName,
    sellerAddress: invoice.sellerAddress,
    sellerLocation: invoice.sellerLocation,
    sellerVatID: invoice.sellerVatID,
    sellerAccount: invoice.sellerAccount,
    buyerName: invoice.buyerName,
    buyerAddress: invoice.buyerAddress,
    buyerLocation: invoice.buyerLocation,
    buyerVatID: invoice.buyerVatID,
    amount: invoice.amount
  };
};
