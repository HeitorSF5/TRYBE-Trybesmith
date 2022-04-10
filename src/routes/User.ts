import { Router } from 'express';
import UserController from '../controllers/User';
import UserValidator from '../middlewares/UserValidator';

const userRoutes = Router();
userRoutes.route('/')
  .post(UserValidator.checkUser, UserController.createUser);

export default userRoutes;
