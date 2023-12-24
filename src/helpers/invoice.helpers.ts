import { Amount, InvoiceDocument, InvoiceInput } from '../models';

export const mapInvoices = (invoices: InvoiceDocument[], userId: string): InvoiceInput[] => {
  return invoices.map((invoice) => mapInvoice(invoice, userId));
};

export const mapInvoice = (invoice: InvoiceDocument, userId: string): InvoiceInput => {
  return {
    userId,
    id: invoice.get('_id'),
    name: invoice.name,
    salary: invoice.salary,
    currencyIso: invoice.currencyIso,
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

export const calculateInvoiceAmount = (rate = 1, salary = 0, vatIncluded = false): Amount => {
  const amount = salary * rate;
  const vat = vatIncluded ? (amount * 23) / 100 : 0;

  return {
    vatAmount: Number(vat.toFixed(2)),
    vatRate: 23,
    net: Number(amount.toFixed(2)),
    gross: Number((amount + vat).toFixed(2)),
  };
};
