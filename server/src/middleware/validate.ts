import { Request, Response, NextFunction } from 'express';
export const validate =
  (fn: (req: Request) => string | null) => (req: Request, res: Response, next: NextFunction) => {
    const err = fn(req);
    if (err) return res.status(400).json({ message: err });
    next();
  };
