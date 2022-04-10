import { Request, Response } from 'express';
import UserService from '../services/User';
import UserTemplate from '../interfaces/UserTemplate';

const createUser = async (req: Request, res: Response) : Promise<Response> => {
  const { username, classe, level, password } : UserTemplate = req.body;
  const { code, token } = await UserService.createUser({ username, classe, level, password });
  return res.status(code).json({ token });
};

export default { createUser };