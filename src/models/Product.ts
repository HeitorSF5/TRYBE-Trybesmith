import { ResultSetHeader } from 'mysql2';
import NewProduct from '../interfaces/NewProduct';
import ProductAndOrderId from '../interfaces/ProductAndOrderId';
import ProductTemplate from '../interfaces/ProductTemplate';
import connection from './connection';

const createProduct = async (newProduct : ProductTemplate) : Promise<NewProduct> => {
  const { name, amount } = newProduct;
  const [{ insertId: id }] = await connection.execute<ResultSetHeader>(
    `INSERT INTO Trybesmith.Products (name, amount) 
    VALUES (?, ?)`,
    [name, amount],
  );
  return { id, name, amount };
};

const getAllProducts = async (): Promise<Array<ProductAndOrderId>> => {
  const [allProducts] = await connection.execute('SELECT * FROM Trybesmith.Products');
  return allProducts as ProductAndOrderId[];
};

export default { createProduct, getAllProducts };