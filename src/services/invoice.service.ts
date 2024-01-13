import { Request, Response } from 'express';
import { MAX_INVOICES_PER_USER } from '../core/configs';
import { Invoice, InvoiceDTO } from '../models';
import { mapInvoice, mapInvoices } from '../helpers';

const getInvoices = async (request: Request, response: Response) => {
  const userId = request.user?.userId;

  if (!userId) {
    return;
  }

  try {
    const invoices = await Invoice.find({ userId });

    return response.status(200).json(mapInvoices(invoices, userId));
  } catch {
    return response.status(500).json({ message: 'Internal server error', status: 500 });
  }
};

const getInvoiceById = async (request: Request<{ id: InvoiceDTO['id'] }, unknown, InvoiceDTO>, response: Response) => {
  const id = request.params.id;
  const userId = request.user?.userId;

  if (!userId) {
    return;
  }

  try {
    const invoice = await Invoice.findById(id);

    if (invoice) {
      return response.status(200).json(mapInvoice(invoice, userId));
    }

    return response.status(404).json({ message: 'Invoice not found', status: 404 });
  } catch {
    return response.status(500).json({ message: 'Internal server error', status: 500 });
  }
};

const createInvoice = async (request: Request<unknown, unknown, InvoiceDTO>, response: Response) => {
  const userId = request.user?.userId;

  if (!userId) {
    return;
  }

  const newInvoice: InvoiceDTO = {
    ...request.body,
    userId
  };

  try {
    const invoices = await Invoice.find({ userId });
    const reachedUserLimit = invoices.length >= MAX_INVOICES_PER_USER;

    if (reachedUserLimit) {
      return response.status(403).json({ message: 'You have reaced your maximum amount of invoices.', messageKey: 'INVOICES.ERRORS.REACHED_USER_LIMIT', status: 403 });
    }

    const invoiceAvailable = invoices.some((invoice) => invoice.name === newInvoice.name);

    if (!invoiceAvailable) {
      await Invoice.create(newInvoice);

      return response.status(201).json(null);
    }

    return response.status(409).json({ message: 'Invoice already exists', messageKey: 'INVOICES.ERRORS.INVOICE_EXISTS', status: 409 });

  } catch (error) {
    return response.status(500).json({ message: 'Internal server error', status: 500 });
  }
};

const editInvoice = async (request: Request<{ id: InvoiceDTO['id'] }, unknown, InvoiceDTO>, response: Response) => {
  const id = request.params.id;
  const updatedInvoice = request.body;
  const userId = request.user?.userId;

  try {
    const invoice = await Invoice.findById(id);

    if (invoice && userId) {
      await Invoice.findByIdAndUpdate(id, updatedInvoice);

      return response.status(200).json(null);
    }

    return response.status(404).json({ message: 'Invoice not found', status: 404 });
  } catch {
    return response.status(500).json({ message: 'Internal server error', status: 500 });
  }
};

const deleteInvoice = async (request: Request<{ id: InvoiceDTO['id'] }, unknown, unknown>, response: Response) => {
  const id = request.params.id;
  const userId = request.user?.userId;

  if (!userId) {
    return;
  }

  try {
    const invoice = await Invoice.findById(id);

    if (invoice) {
      await Invoice.findByIdAndDelete(id);

      return response.status(204).json(null);
    }

    return response.status(404).json({ message: 'Invoice not found', status: 404 });
  } catch {
    return response.status(500).json({ message: 'Internal server error', status: 500 });
  }
};

export {
  getInvoices,
  getInvoiceById,
  createInvoice,
  editInvoice,
  deleteInvoice
};
