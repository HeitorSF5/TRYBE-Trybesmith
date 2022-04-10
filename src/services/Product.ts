import NewProduct from '../interfaces/NewProduct';
import ProductAndOrderId from '../interfaces/ProductAndOrderId';
import ProductTemplate from '../interfaces/ProductTemplate';
import Product from '../models/Product';

const createProduct = async (newProd: ProductTemplate): Promise<NewProduct> => {
  const newItem = await Product.createProduct(newProd);
  return newItem;
};

const getAllProducts = async (): Promise<Array<ProductAndOrderId>> => {
  const allProducts = await Product.getAllProducts();
  return allProducts;
};

export default { createProduct, getAllProducts };