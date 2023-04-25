import { Request, Response } from 'express';
import { Account, Transfer, TransferInput } from '../models';
import { mapTransfers } from '../helpers/transfer.helpers';

const getTransfers = async (request: Request, response: Response) => {
  const userId = request.user!.userId;
  try {
    const transfers = await Transfer.find({ userId }).sort({ createdAt: -1 });

    return response.status(200).json({ data: mapTransfers(transfers, userId) });
  } catch {
    return response.status(200).json({ data: null });
  }
};

const getTransferById = async (request: Request<{ id: TransferInput['id'] }, {}, TransferInput>, response: Response) => {
  const id = request.params.id;

  try {
    const transfer = await Transfer.findById(id);

    if (transfer) {
      return response.status(200).json({ data: transfer });
    }

    return response.status(404).json({ error: { message: 'Transfer not found', status: 404 } });
  } catch {
    return response.status(500).json({ error: { message: 'Internal server error', status: 500 } });
  }
};

const createTransfer = async (request: Request<{}, {}, TransferInput>, response: Response) => {
  const userId = request.user!.userId;
  const { fromAccount, toAccount, amount, createdAt } = request.body;
  const payload = { userId, fromAccount, toAccount, amount, createdAt };

  if (fromAccount === toAccount) {
    return response.status(409).json({ error: { message: 'You cannot transfer between same accounts.', messageKey: 'TRANSFERS.ERRORS.SAME_ACCOUNT', status: 409 } });
  }

  try {
    await Transfer.create(payload);
    const fromAccountDocument = await Account.findById(fromAccount);
    const toAccountDocument = await Account.findById(toAccount);

    await Account.findByIdAndUpdate(fromAccount, { balance: fromAccountDocument!.balance - amount });
    await Account.findByIdAndUpdate(toAccount, { balance: toAccountDocument!.balance + amount });

    return response.status(201).json({ data: null });
  } catch (error) {
    return response.status(500).json({ error: { message: 'Internal server error', status: 500 } });
  }
};

const editTransfer = async (request: Request<{ id: TransferInput['id'] }, {}, TransferInput>, response: Response) => {
  const id = request.params.id;
  const userId = request.user!.userId;
  const { fromAccount, toAccount, amount, createdAt } = request.body;

  if (fromAccount === toAccount) {
    return response.status(409).json({ error: { message: 'You cannot transfer between same accounts.', messageKey: 'TRANSFERS.ERRORS.SAME_ACCOUNT', status: 409 } });
  }

  try {
    const oldTransfer = await Transfer.findById(id);
    const fromAccountDocument = await Account.findById(fromAccount);
    const toAccountDocument = await Account.findById(toAccount);
    const diffAmount = oldTransfer!.amount - amount;
    await Transfer.findByIdAndUpdate(id, request.body);
    await Account.findByIdAndUpdate(fromAccount, { balance: fromAccountDocument!.balance + diffAmount });
    await Account.findByIdAndUpdate(toAccount, { balance: toAccountDocument!.balance - diffAmount });

    return response.status(200).json({ data: null });
  } catch {
    return response.status(500).json({ error: { message: 'Internal server error', status: 500 } });
  }
};

const deleteTransfer = async (request: Request<{ id: TransferInput['id'] }, {}, {}>, response: Response) => {
  const id = request.params.id;

  try {
    const transfer = await Transfer.findById(id);

    if (transfer) {
      await Transfer.findByIdAndDelete(id);
      const fromAccountDocument = await Account.findById(transfer.fromAccount);
      const toAccountDocument = await Account.findById(transfer.toAccount);

      await Account.findByIdAndUpdate(transfer.fromAccount, { balance: fromAccountDocument!.balance + transfer.amount });
      await Account.findByIdAndUpdate(transfer.toAccount, { balance: toAccountDocument!.balance - transfer.amount });

      return response.status(204).json({ data: null });
    }

    return response.status(404).json({ error: { message: 'Transfer not found', status: 404 } });
  } catch {
    return response.status(500).json({ error: { message: 'Internal server error', status: 500 } });
  }
};

export { getTransfers, createTransfer, getTransferById, editTransfer, deleteTransfer };
