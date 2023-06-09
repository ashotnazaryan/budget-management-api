import { Request, Response } from 'express';
import { User } from '../models';
import { mapUser } from '../helpers';

const getUser = async (request: Request, response: Response) => {
  const userId = request.user?.userId;

  try {
    const user = await User.findOne({ userId });

    if (user) {
      return response.status(200).json(mapUser(user));
    }

    return response.status(404).json({ message: 'User not found', status: 404 });
  } catch {
    return response.status(500).json({ message: 'Internal server error', status: 500 });
  }
};

export { getUser };
