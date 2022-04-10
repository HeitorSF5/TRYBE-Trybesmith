import { Request, Response } from 'express';
import Login from '../services/Login';

const loginControl = async (req: Request, res: Response) : Promise<Response> => {
  const { username, password } = req.body;
  const result = await Login.loginService({ username, password });
  if (typeof result !== 'string') return res.status(result.code).json({ error: result.error });
  return res.status(200).json({ token: result });
};

export default { loginControl };