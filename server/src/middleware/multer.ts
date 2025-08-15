import multer from 'multer';
import { config } from '../config/env.js';
import path from 'path';
import fs from 'fs';

const dir = path.resolve(process.cwd(), config.UPLOADS_DIR);
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, dir),
  filename: (_req, file, cb) => cb(null, Date.now() + '-' + file.originalname.replace(/\s+/g, '_'))
});

export const upload = multer({ storage });
