import { Request, Response } from 'express';
import Order from '../models/Order.js';

export const createDraftOrder = async (req: Request, res: Response) => {
  const draft = await Order.create({
    buyer: (req as any).user?._id,
    items: [],
    subtotal: 49.99,
    tax: 0,
    shipping: 0,
    total: 49.99,
    currency: 'USD',
    status: 'created',
    paymentStatus: 'pending'
  });
  res.status(201).json(draft);
};
