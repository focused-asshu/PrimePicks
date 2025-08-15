import { Router } from 'express';
import { signIn, signUp } from '../controllers/auth.controller.js';
const r = Router();
r.post('/signup', signUp);
r.post('/signin', signIn);
export default r;
