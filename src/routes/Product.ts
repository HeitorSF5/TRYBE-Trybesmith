import { Router } from 'express';
import ProductController from '../controllers/Product';
import ProductValidator from '../middlewares/ProductValidator';

const productRoutes = Router();
productRoutes.route('/')
  .post(ProductValidator.checkCreateProduct, ProductController.createProduct)
  .get(ProductValidator.checkGetAllProd, ProductController.getAllProducts);

export default productRoutes;