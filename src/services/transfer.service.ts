import { Request, Response } from 'express';
import { Account, AccountDTO, Transfer, TransferDTO } from '../models';
import { mapTransfer, mapTransfers } from '../helpers';
import { MAX_TRANSFERS_PER_USER, MAX_TRANSFER_AMOUNT } from '../core/configs';

const getTransfers = async (request: Request, response: Response) => {
  const userId = request.user?.userId;

  if (!userId) {
    return;
  }

  try {
    const transfers = await Transfer.find({ userId }).sort({ createdAt: -1 });

    return response.status(200).json(mapTransfers(transfers, userId));
  } catch {
    return response.status(200).json(null);
  }
};

const getTransferById = async (request: Request<{ id: TransferDTO['id'] }, unknown, TransferDTO>, response: Response) => {
  const id = request.params.id;
  const userId = request.user?.userId;

  if (!userId) {
    return;
  }

  try {
    const transfer = await Transfer.findById(id);

    if (transfer) {
      return response.status(200).json(mapTransfer(transfer, userId));
    }

    return response.status(404).json({ message: 'Transfer not found', status: 404 });
  } catch {
    return response.status(500).json({ message: 'Internal server error', status: 500 });
  }
};

const createTransfer = async (request: Request<unknown, unknown, TransferDTO>, response: Response) => {
  const userId = request.user?.userId;

  const { fromAccount, toAccount, amount, createdAt } = request.body;
  const payload = { userId, fromAccount, toAccount, amount, createdAt };

  if (fromAccount === toAccount) {
    return response.status(409).json({ message: 'You cannot transfer between same accounts.', messageKey: 'TRANSFERS.ERRORS.SAME_ACCOUNT', status: 409 });
  }

  if (amount >= MAX_TRANSFER_AMOUNT) {
    return response.status(422).json({ message: 'Invalid amount', messageKey: 'TRANSFERS.ERRORS.INVALID_AMOUNT', status: 422 });
  }

  try {
    const transfers = await Transfer.find({ userId });
    const reachedUserLimit = transfers.length >= MAX_TRANSFERS_PER_USER;

    if (reachedUserLimit) {
      return response.status(403).json({ message: 'You have reaced your maximum amount of transfers.', messageKey: 'TRANSFERS.ERRORS.REACHED_USER_LIMIT', status: 403 });
    }

    await Transfer.create(payload);
    const fromAccountDocument = await Account.findById(fromAccount) || { balance: 0 };
    const toAccountDocument = await Account.findById(toAccount) || { balance: 0 };

    await Account.findByIdAndUpdate(fromAccount, { balance: fromAccountDocument.balance - amount });
    await Account.findByIdAndUpdate(toAccount, { balance: toAccountDocument.balance + amount });

    return response.status(201).json(null);
  } catch (error) {
    return response.status(500).json({ message: 'Internal server error', status: 500 });
  }
};

const editTransfer = async (request: Request<{ id: TransferDTO['id'] }, unknown, TransferDTO>, response: Response) => {
  const id = request.params.id;
  const { fromAccount, toAccount, amount } = request.body;

  if (fromAccount === toAccount) {
    return response.status(409).json({ message: 'You cannot transfer between same accounts.', messageKey: 'TRANSFERS.ERRORS.SAME_ACCOUNT', status: 409 });
  }

  if (amount >= MAX_TRANSFER_AMOUNT) {
    return response.status(422).json({ message: 'Invalid amount', messageKey: 'TRANSFERS.ERRORS.INVALID_AMOUNT', status: 422 });
  }

  try {
    const oldTransfer = await Transfer.findById(id);

    if (!oldTransfer) {
      return;
    }

    const oldTransferAmount = oldTransfer.amount;
    const fromAccountDocument = await Account.findById(fromAccount);
    const toAccountDocument = await Account.findById(toAccount);

    if (!fromAccountDocument || !toAccountDocument) {
      return;
    }

    const fromAccountBalance = oldTransfer.fromAccount === fromAccount
      ? fromAccountDocument.balance + oldTransferAmount - amount
      : toAccountDocument.balance + oldTransferAmount - amount;

    const toAccountBalance = oldTransfer.toAccount === toAccount
      ? toAccountDocument.balance - oldTransferAmount + amount
      : fromAccountDocument.balance - oldTransferAmount + amount;

    // TODO: fix when multiple transfers per from/to account

    await Transfer.findByIdAndUpdate(id, request.body);
    await Account.findByIdAndUpdate(fromAccount, { balance: fromAccountBalance });
    await Account.findByIdAndUpdate(toAccount, { balance: toAccountBalance });

    return response.status(200).json(null);
  } catch {
    return response.status(500).json({ message: 'Internal server error', status: 500 });
  }
};

const deleteTransfer = async (request: Request<{ id: TransferDTO['id'] }, unknown, unknown>, response: Response) => {
  const id = request.params.id;

  try {
    const transfer = await Transfer.findById(id);

    if (transfer) {
      await Transfer.findByIdAndDelete(id);
      const fromAccountDocument = await Account.findById(transfer.fromAccount);
      const toAccountDocument = await Account.findById(transfer.toAccount);

      if (!fromAccountDocument || !toAccountDocument) {
        return;
      }

      await Account.findByIdAndUpdate(transfer.fromAccount, { balance: fromAccountDocument.balance + transfer.amount });
      await Account.findByIdAndUpdate(transfer.toAccount, { balance: toAccountDocument.balance - transfer.amount });

      return response.status(204).json(null);
    }

    return response.status(404).json({ message: 'Transfer not found', status: 404 });
  } catch {
    return response.status(500).json({ message: 'Internal server error', status: 500 });
  }
};

const deleteAccountTransfers = async (userId: string, accountId: AccountDTO['id']): Promise<void> => {
  await Transfer.deleteMany({
    userId, $or: [
      { fromAccount: { $in: accountId } },
      { toAccount: { $in: accountId } }
    ]
  });
};

export { getTransfers, createTransfer, getTransferById, editTransfer, deleteTransfer, deleteAccountTransfers };
