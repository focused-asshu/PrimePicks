import { api } from './base';

export const productsApi = api.injectEndpoints({
  endpoints: (build) => ({
    listProducts: build.query<any, any>({
      query: (params) => ({ url: '/products', params }),
      providesTags: ['Product']
    })
  })
});

export const { useListProductsQuery } = productsApi;
