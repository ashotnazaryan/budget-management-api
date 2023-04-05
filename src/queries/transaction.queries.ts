import { PipelineStage } from 'mongoose';
import { CONFIG } from '../core/configs';

export const getTransactionQuery = (userId: string): PipelineStage[] => {
  return [
    {
      $sort: {
        createdAt: 1
      }
    },
    {
      $match: {
        userId
      }
    },
    {
      $lookup: {
        from: CONFIG.collections.accounts,
        localField: 'id',
        foreignField: 'accountId',
        as: 'account'
      }
    },
    {
      $unwind: '$account'
    },
    // TODO: fix the account name and icon bug (gets the first item always)
    {
      $group: {
        _id: '$_id',
        accountName: { $first: '$account.name' },
        accountIcon: { $first: '$account.icon' },
        accountId: { $first: '$accountId' },
        categoryId: { $first: '$categoryId' },
        userId: { $first: '$userId' },
        type: { $first: '$type' },
        name: { $first: '$name' },
        amount: { $first: '$amount' },
        percentValue: { $first: '$percentValue' },
        createdAt: { $first: '$createdAt' },
        icon: { $first: '$icon' },
      }
    }
  ];
}
