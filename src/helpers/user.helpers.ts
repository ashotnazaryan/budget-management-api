import { UserDocument, UserDTO } from '../models';

export const mapUser = (user: UserDocument): UserDTO => {
  return {
    id: user.id,
    userId: user.userId,
    fullName: user.fullName,
    avatar: user.avatar
  };
};
