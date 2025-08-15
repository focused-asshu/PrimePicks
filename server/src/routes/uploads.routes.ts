import { Router } from 'express';
import { upload } from '../middleware/multer.js';
const r = Router();
r.post('/', upload.single('file'), (req, res) => {
  res.status(201).json({ path: (req.file as any)?.filename });
});
export default r;
