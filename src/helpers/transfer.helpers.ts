import { TransferDocument, TransferDTO } from '../models';

export const mapTransfers = (transfers: TransferDocument[], userId: string): TransferDTO[] => {
  return transfers.map((transfer) => mapTransfer(transfer, userId));
};

export const mapTransfer = (transfer: TransferDocument, userId: string): TransferDTO => {
  return {
    userId,
    id: transfer.id,
    fromAccount: transfer.fromAccount,
    toAccount: transfer.toAccount,
    amount: transfer.amount,
    createdAt: transfer.createdAt
  };
};
