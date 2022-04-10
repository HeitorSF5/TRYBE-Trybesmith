import { Request, Response, NextFunction } from 'express';
import { checkToken } from '../authorization/Token';
import ProductSchema from '../schemas/ProductSchema';

const checkGetAllProd = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ error: 'Token not found' });
  const tokenCheck = checkToken(authorization);
  if (tokenCheck !== true) return res.status(tokenCheck.code).json({ error: tokenCheck.error });
  next();
};

const checkCreateProduct = async (req: Request, res: Response, next: NextFunction) => {
  const { name, amount } = req.body;
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ error: 'Token not found' });
  const tokenCheck = checkToken(authorization);
  if (tokenCheck !== true) return res.status(tokenCheck.code).json({ error: tokenCheck.error });
  const productFail = ProductSchema.checkProductInfo({ name, amount });
  if (productFail) return res.status(productFail.code).json({ error: productFail.error });  
  next();
};

export default { checkCreateProduct, checkGetAllProd };