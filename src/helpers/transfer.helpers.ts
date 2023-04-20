import { TransferDocument, TransferInput } from '../models';

export const mapTransfers = (transfers: TransferDocument[], userId: string): TransferInput[] => {
  return transfers.map((transfer) => {
    return {
      userId,
      id: transfer.id,
      fromAccount: transfer.fromAccount,
      toAccount: transfer.toAccount,
      amount: transfer.amount,
      createdAt: transfer.createdAt
    };
  });
};
