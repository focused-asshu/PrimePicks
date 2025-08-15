import { Request, Response } from 'express';
import { stripe } from '../config/stripe.js';
import { config } from '../config/env.js';
import Order from '../models/Order.js';

export const createPaymentIntent = async (req: Request, res: Response) => {
  const { amount, currency = 'USD', orderId } = req.body as { amount: number; currency: string; orderId: string };
  const pi = await stripe.paymentIntents.create({
    amount: Math.round(amount * 100),
    currency: currency.toLowerCase(),
    metadata: { orderId },
    automatic_payment_methods: { enabled: true }
  });
  res.json({ clientSecret: pi.client_secret });
};

export const webhook = async (req: Request, res: Response) => {
  const sig = req.headers['stripe-signature'] as string;
  try {
    const event = await (stripe.webhooks as any).constructEventAsync((req as any).rawBody, sig, config.STRIPE_WEBHOOK_SECRET);
    if (event.type === 'payment_intent.succeeded') {
      const pi = event.data.object as any;
      const orderId = pi.metadata?.orderId;
      if (orderId) await Order.findByIdAndUpdate(orderId, { paymentStatus: 'paid', paymentIntentId: pi.id });
    }
    res.json({ received: true });
  } catch (err: any) {
    res.status(400).send(`Webhook Error: ${err.message}`);
  }
};
