import { Router } from 'express';
import { createDraftOrder } from '../controllers/orders.controller.js';
const r = Router();
r.post('/draft', createDraftOrder);
export default r;
