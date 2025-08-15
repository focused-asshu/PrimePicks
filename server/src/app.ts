import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import rateLimit from 'express-rate-limit';
import { errorHandler } from './middleware/errorHandler.js';
import authRoutes from './routes/auth.routes.js';
import usersRoutes from './routes/users.routes.js';
import productsRoutes from './routes/products.routes.js';
import categoriesRoutes from './routes/categories.routes.js';
import cartsRoutes from './routes/carts.routes.js';
import ordersRoutes from './routes/orders.routes.js';
import paymentsRoutes from './routes/payments.routes.js';
import uploadsRoutes from './routes/uploads.routes.js';
import adminRoutes from './routes/admin.routes.js';
import reviewsRoutes from './routes/reviews.routes.js';
import { config } from './config/env.js';

const app = express();

app.use((req: any, res, next) => {
  if (req.originalUrl.startsWith('/api/payments/webhook')) {
    express.raw({ type: 'application/json' })(req, res, next);
  } else {
    next();
  }
});

app.use(helmet());
app.use(morgan('dev'));
app.use(express.json({ limit: '2mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({ origin: config.APP_URL, credentials: true }));
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 1000 }));

app.get('/health', (_req, res) => res.json({ ok: true }));

app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/products', productsRoutes);
app.use('/api/categories', categoriesRoutes);
app.use('/api/carts', cartsRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/payments', paymentsRoutes);
app.use('/api/uploads', uploadsRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/reviews', reviewsRoutes);

app.use(errorHandler);

export default app;
