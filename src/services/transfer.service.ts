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

const createTransfer = async (request: Request<{}, {}, TransferInput>, response: Response) => {
  const userId = request.user!.userId;
  const { fromAccount, toAccount, amount, createdAt } = request.body;
  const payload = { userId, fromAccount, toAccount, amount, createdAt };

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

export { getTransfers, createTransfer };
