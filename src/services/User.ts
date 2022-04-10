import { createToken } from '../authorization/Token';
import UserCreated from '../interfaces/UserCreated';
import UserTemplate from '../interfaces/UserTemplate';
import UserModel from '../models/User';

const createUser = async (newUser : UserTemplate): Promise<UserCreated> => {
  const id: number = await UserModel.createUser(newUser);
  const token = createToken({ username: newUser.username, id });
  return { code: 201, token };
};

export default { createUser };