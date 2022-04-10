import { Request, Response } from 'express';
import Product from '../services/Product';

const createProduct = async (req: Request, res: Response) : Promise<Response> => {
  const newProd = req.body;
  const newItem = await Product.createProduct(newProd);
  return res.status(201).json({ item: newItem });
};

const getAllProducts = async (req: Request, res: Response) : Promise<Response> => {
  const allProducts = await Product.getAllProducts();
  return res.status(200).json(allProducts);
};

export default { createProduct, getAllProducts };