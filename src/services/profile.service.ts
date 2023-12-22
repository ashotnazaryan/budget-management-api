import { Request, Response } from 'express';
import { Profile, ProfileInput } from '../models';
import { mapProfile } from '../helpers';

const getProfile = async (request: Request, response: Response) => {
  const userId = request.user?.userId;

  if (!userId) {
    return;
  }

  try {
    const profile = await Profile.findOne({ userId });

    if (profile) {
      return response.status(200).json(mapProfile(profile, userId));
    }

    const newEmptyProfile = await Profile.create({ userId });

    return response.status(200).json(newEmptyProfile);
  } catch {
    return response.status(404).json({ message: 'Profile not found', status: 404 });
  }
};

const editProfile = async (request: Request<unknown, unknown, ProfileInput>, response: Response) => {
  const updatedProfile = request.body;
  const userId = request.user?.userId;

  try {
    const profile = await Profile.findOne({ userId });

    if (profile) {
      await Profile.updateOne({ userId }, updatedProfile);

      return response.status(200).json(null);
    }

    return response.status(404).json({ message: 'Profile not found', status: 404 });
  } catch {
    return response.status(500).json({ message: 'Internal server error', status: 500 });
  }
};

export {
  getProfile,
  editProfile
};
