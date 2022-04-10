import express from 'express';
import loginRoutes from './routes/Login';
import orderRoutes from './routes/Order';
import productRoutes from './routes/Product';
import userRouter from './routes/User';

const app = express();

app.use(express.json());
app.use('/users', userRouter);
app.use('/login', loginRoutes);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

export default app;
