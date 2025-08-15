import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { config } from '../config/env.js';
import User from '../models/User.js';

export interface AuthedRequest extends Request {
  user?: any;
}

export const auth = async (req: AuthedRequest, res: Response, next: NextFunction) => {
  const hdr = req.headers.authorization;
  if (!hdr || !hdr.startsWith('Bearer ')) return res.status(401).json({ message: 'Unauthorized' });
  const token = hdr.split(' ')[1];
  try {
    const payload = jwt.verify(token, config.JWT_SECRET) as any;
    const user = await User.findById(payload.sub).lean();
    if (!user) return res.status(401).json({ message: 'Unauthorized' });
    req.user = user;
    next();
  } catch {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

export const requireRole = (roles: string[]) => {
  return (req: AuthedRequest, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) return res.status(403).json({ message: 'Forbidden' });
    next();
  };
};
