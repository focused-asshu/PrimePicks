import { Router } from 'express';
import { createPaymentIntent, webhook } from '../controllers/payments.controller.js';
const r = Router();
r.post('/intents', createPaymentIntent);
r.post('/webhook', webhook);
export default r;
