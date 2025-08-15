import nodemailer from 'nodemailer';
import { config } from './env.js';
export const mailer = nodemailer.createTransport({
  host: config.SMTP_HOST,
  port: config.SMTP_PORT,
  auth: config.SMTP_USER ? { user: config.SMTP_USER, pass: config.SMTP_PASS } : undefined
});
