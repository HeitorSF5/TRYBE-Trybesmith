import { ResultSetHeader } from 'mysql2';
import NewOrder from '../interfaces/NewOrder';
import OrderTemplate from '../interfaces/OrderTemplate';
// import ProductIdArray from '../interfaces/ProductIdArray';
import ProductUpdateInfo from '../interfaces/ProductUpdateInfo';
import UserWithId from '../interfaces/UserWithId';
import connection from './connection';

const productOrderUpdate = (prodUpdateInfo: ProductUpdateInfo) : void => {
  const { orderId, products } = prodUpdateInfo;
  products.forEach((prodId) => {
    connection.execute(
      'UPDATE Trybesmith.Products SET orderId=? WHERE id=?', 
      [orderId, prodId],
    );
  });
};

const getUserId = async (userName: string) : Promise<number> => {
  const mysqlQuery = 'SELECT * FROM Trybesmith.Users WHERE username=?';
  const [rows] = await connection.execute(mysqlQuery, [userName]);
  const [user] = rows as UserWithId[];
  return user.id;
};
// I realize this ^^^ would be easier if I had just put the userId inside the token generation, but that is not part of the agreed Rules of Business, so I have to do all this instead.

const getOrderById = async (orderId: number) : Promise<OrderTemplate | false> => {
  const queryOrder = 'SELECT * FROM Trybesmith.Orders WHERE id=?';
  const queryProductsIds = 'SELECT id FROM Trybesmith.Products WHERE orderId=?';
  const [rows] = await connection.query(queryOrder, [orderId]);
  const [products] = await connection.query(queryProductsIds, [orderId]);
  const prodStringify = JSON.stringify(products);
  const prodIdArray = JSON.parse(prodStringify).map((product : { id: number }) => product.id);
  // This is beautiful magic passed down from Grand Master Italo ^^^
  const [order] = rows as OrderTemplate[];
  if (order === undefined) return false;
  order.products = await prodIdArray;
  return order;
};

const getAllOrders = async () : Promise<Array<OrderTemplate>> => {
  const queryOrders = 'SELECT * FROM Trybesmith.Orders';
  const [rows] = await connection.query(queryOrders, []);
  return rows as Array<OrderTemplate>;
};

const createOrder = async (newOrder : NewOrder) : Promise<number> => {
  const { userName, products } = newOrder;
  const userId = await getUserId(userName);
  const [{ insertId: orderId }] = await connection.execute<ResultSetHeader>(
    `INSERT INTO Trybesmith.Orders (userId) 
    VALUES (?)`,
    [userId],
  );
  productOrderUpdate({ products, orderId });
  return userId;
};

export default { createOrder, getOrderById, getAllOrders };