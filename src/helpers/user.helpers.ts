import { UserDocument, UserInput } from '../models';

export const mapUser = (user: UserDocument): UserInput => {
  return {
    id: user.id,
    userId: user.userId,
    fullName: user.fullName,
    avatar: user.avatar
  };
};
