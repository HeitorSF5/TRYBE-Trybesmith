import NewProduct from './NewProduct';

export default interface ProductAndOrderId extends NewProduct {
  orderId: number
}