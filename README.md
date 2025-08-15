# PrimePicks
a more convinient e-commerce website...
PrimePicks — Multi-vendor eCommerce (MERN + Stripe)
Local:
1) pnpm i
2) Copy .env.example to server/.env and client/.env; fill values.
3) pnpm dev
4) stripe listen --forward-to localhost:5000/api/payments/webhook (put secret in STRIPE_WEBHOOK_SECRET)
