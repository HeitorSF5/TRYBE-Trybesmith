import { Request, Response, NextFunction } from 'express';
import { checkToken, decodeToken } from '../authorization/Token';
import OrderSchema from '../schemas/OrderSchema';

const checkCreateOrder = async (req: Request, res: Response, next: NextFunction) => {
  const { products } = req.body;
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ error: 'Token not found' });
  const tokenCheck = checkToken(authorization);
  if (tokenCheck !== true) return res.status(tokenCheck.code).json({ error: tokenCheck.error });
  const productFail = OrderSchema.checkProductArray(products);
  if (productFail) return res.status(productFail.code).json({ error: productFail.error });
  const decoded = decodeToken(authorization);
  req.body.decoded = decoded;
  next();
};

const checkOrderToken = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ error: 'Token not found' });
  const tokenCheck = checkToken(authorization);
  if (tokenCheck !== true) return res.status(tokenCheck.code).json({ error: tokenCheck.error });
  next();
};

export default { checkCreateOrder, checkOrderToken };