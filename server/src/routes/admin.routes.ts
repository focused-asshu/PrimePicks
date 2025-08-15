import { Router } from 'express';
import { auth, requireRole } from '../middleware/auth.js';
const r = Router();
r.use(auth, requireRole(['admin']));
// Admin endpoints (metrics, moderation) go here
export default r;
