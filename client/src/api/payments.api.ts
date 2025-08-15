import { api } from './base';

export const paymentsApi = api.injectEndpoints({
  endpoints: (build) => ({
    createPaymentIntent: build.mutation<{ clientSecret: string }, { amount: number; currency: string; orderId: string }>({
      query: (body) => ({ url: '/payments/intents', method: 'POST', body })
    })
  })
});

export const { useCreatePaymentIntentMutation } = paymentsApi;
