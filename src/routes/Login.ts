import { Router } from 'express';
import Login from '../controllers/Login';
import LoginValidator from '../middlewares/LoginValidator';

const loginRoutes = Router();
loginRoutes.route('/')
  .post(LoginValidator.checkLogin, Login.loginControl);

export default loginRoutes;
