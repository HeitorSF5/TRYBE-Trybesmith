// import ErrorResponse from '../interfaces/ErrorResponse';
import NewOrder from '../interfaces/NewOrder';
import OrderTemplate from '../interfaces/OrderTemplate';
import Order from '../models/Order';

const createOrder = async (newOrder : NewOrder): Promise<number> => {
  const userId = await Order.createOrder(newOrder);
  return userId;
};

const getOrderById = async (orderId : number) : Promise<OrderTemplate | false> => {
  const order = await Order.getOrderById(orderId);
  // if (order === false) return { code: 404, error: 'Order not found' };
  if (!order) return false;
  return order;
};

const getAllOrders = async () : Promise<Array<OrderTemplate>> => {
  const order = await Order.getAllOrders();
  const ordersWithProdsId = order.map(async (eachOrder) => {
    const getOrder = await Order.getOrderById(+eachOrder.id);
    return getOrder;
  });
  const pleaseWork = await Promise.all(ordersWithProdsId);
  return pleaseWork as Array<OrderTemplate>;
};

export default { createOrder, getOrderById, getAllOrders };
