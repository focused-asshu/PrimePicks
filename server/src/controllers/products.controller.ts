import { Request, Response } from 'express';
import Product from '../models/Product.js';

export const listProducts = async (req: Request, res: Response) => {
  const { q, category, minPrice, maxPrice, sort, seller, page = '1', limit = '12' } = req.query as any;
  const filter: any = { active: true };
  if (q) filter.$text = { $search: q };
  if (category) filter.category = category;
  if (seller) filter.seller = seller;
  if (minPrice || maxPrice) filter['variants.price'] = {};
  if (minPrice) filter['variants.price'].$gte = Number(minPrice);
  if (maxPrice) filter['variants.price'].$lte = Number(maxPrice);

  const sortMap: any = { newest: { createdAt: -1 }, priceAsc: { 'variants.price': 1 }, priceDesc: { 'variants.price': -1 }, rating: { avgRating: -1 } };
  const skip = (Number(page) - 1) * Number(limit);

  const [items, total] = await Promise.all([
    Product.find(filter).sort(sortMap[sort] || { createdAt: -1 }).skip(skip).limit(Number(limit)),
    Product.countDocuments(filter)
  ]);

  res.json({ items, total, page: Number(page), pages: Math.ceil(total / Number(limit)) });
};

export const getProduct = async (req: Request, res: Response) => {
  const p = await Product.findById(req.params.id);
  if (!p) return res.status(404).json({ message: 'Not found' });
  res.json(p);
};

export const createProduct = async (req: any, res: any) => {
  const body = req.body;
  body.seller = req.user._id;
  const p = await Product.create(body);
  res.status(201).json(p);
};

export const updateProduct = async (req: any, res: any) => {
  const p = await Product.findOneAndUpdate({ _id: req.params.id, seller: req.user._id }, req.body, { new: true });
  if (!p) return res.status(404).json({ message: 'Not found' });
  res.json(p);
};

export const deleteProduct = async (req: any, res: any) => {
  const p = await Product.findOneAndDelete({ _id: req.params.id, seller: req.user._id });
  if (!p) return res.status(404).json({ message: 'Not found' });
  res.json({ ok: true });
};
