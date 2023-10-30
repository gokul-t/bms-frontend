import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ProductListParams, ProductPagedList } from './types/product-interface'


export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api/' }),
  endpoints: (builder) => ({
    listProducts: builder.query<ProductPagedList, ProductListParams>({
      query: ({ pageNumber = 0, pageSize = 6 }: ProductListParams) => `products?pageNumber=${pageNumber}&pageSize=${pageSize}`,
    }),
  }),
})

export const { useListProductsQuery } = productApi