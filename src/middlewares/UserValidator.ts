import { Request, Response, NextFunction } from 'express';
import { checkClasse, checkLevel, checkPassword, checkUsername } from '../schemas/UserSchema';
// import UserInterface from '../interfaces/User';

const checkUser = (req: Request, res: Response, next: NextFunction) => {
  const { username, password, classe, level } = req.body;
  const failUsername = checkUsername(username);
  const failPassword = checkPassword(password);
  const failClasse = checkClasse(classe);
  const failLevel = checkLevel(level);

  if (failUsername) return res.status(failUsername.code).json({ error: failUsername.error });
  if (failPassword) return res.status(failPassword.code).json({ error: failPassword.error });
  if (failClasse) return res.status(failClasse.code).json({ error: failClasse.error });
  if (failLevel) return res.status(failLevel.code).json({ error: failLevel.error });

  next();
};

export default { checkUser };