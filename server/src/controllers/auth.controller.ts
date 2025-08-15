import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { config } from '../config/env.js';

const signToken = (user: any) =>
  jwt.sign({ sub: user._id, role: user.role }, config.JWT_SECRET, { expiresIn: config.JWT_EXPIRES_IN });

export const signUp = async (req: Request, res: Response) => {
  const { name, email, password, role, shopName } = req.body;
  const exists = await User.findOne({ email });
  if (exists) return res.status(409).json({ message: 'Email already registered' });
  const user = await User.create({
    name,
    email,
    password,
    role: role === 'seller' ? 'seller' : 'buyer',
    seller: role === 'seller' ? { shopName, shopSlug: shopName?.toLowerCase().replace(/\s+/g, '-') } : undefined
  });
  const token = signToken(user);
  res.status(201).json({ token, user: { id: user._id, name: user.name, role: user.role } });
};

export const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select('+password');
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });
  // @ts-ignore
  const ok = await user.comparePassword(password);
  if (!ok) return res.status(401).json({ message: 'Invalid credentials' });
  const token = signToken(user);
  res.json({ token, user: { id: user._id, name: user.name, role: user.role } });
};
