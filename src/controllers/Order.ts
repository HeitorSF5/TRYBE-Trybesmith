import { Request, Response } from 'express';
import Order from '../services/Order';

const createOrder = async (req: Request, res: Response) : Promise<Response> => {
  const { products, decoded } = req.body;
  const { username } = await decoded.data;
  const newOrder = { products, userName: username };
  const userId = await Order.createOrder(newOrder);
  return res.status(201).json({ order: { products, userId } });
};

const getOrderById = async (req: Request, res:Response) : Promise<Response> => {
  const { id } = req.params;  
  const orderId = +id;
  const order = await Order.getOrderById(orderId);
  if (!order) return res.status(404).json({ error: 'Order not found' });
  return res.status(200).json(order);
};

const getAllOrders = async (req: Request, res:Response) : Promise<Response> => {
  const allOrders = await Order.getAllOrders();
  return res.status(200).json(allOrders);
};

export default { createOrder, getOrderById, getAllOrders };