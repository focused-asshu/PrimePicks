export const config = {
  PORT: Number(process.env.PORT || 5000),
  NODE_ENV: process.env.NODE_ENV || 'development',
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/primepicks',
  JWT_SECRET: process.env.JWT_SECRET || 'devsecret',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '7d',
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY || '',
  STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET || '',
  SMTP_HOST: process.env.SMTP_HOST || '',
  SMTP_PORT: Number(process.env.SMTP_PORT || 587),
  SMTP_USER: process.env.SMTP_USER || '',
  SMTP_PASS: process.env.SMTP_PASS || '',
  EMAIL_FROM: process.env.EMAIL_FROM || 'PrimePicks <no-reply@primepicks.test>',
  APP_URL: process.env.APP_URL || 'http://localhost:5173',
  UPLOADS_DRIVER: process.env.UPLOADS_DRIVER || 'local',
  UPLOADS_DIR: process.env.UPLOADS_DIR || 'uploads',
  CURRENCY_BASE: process.env.CURRENCY_BASE || 'USD',
  SUPPORTED_CURRENCIES: (process.env.SUPPORTED_CURRENCIES || 'USD').split(',')
};
