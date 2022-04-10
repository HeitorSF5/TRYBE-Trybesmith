import { Router } from 'express';
import Order from '../controllers/Order';
import OrderValidator from '../middlewares/OrderValidator';

const orderRoutes = Router();
orderRoutes.route('/:id')
  .get(OrderValidator.checkOrderToken, Order.getOrderById);

orderRoutes.route('/')
  .post(OrderValidator.checkCreateOrder, Order.createOrder)
  .get(OrderValidator.checkOrderToken, Order.getAllOrders);

export default orderRoutes;
