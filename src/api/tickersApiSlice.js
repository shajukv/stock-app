import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../config/_config'

export const tickersApi = createApi({
  reducerPath: 'tickersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: (build) => ({
    getTickers: build.query({
      query: () => ({
        url: '/tickers',
        method: 'GET',
        params: 'symbols=ALL',
      }),
      transformResponse: (data) => data,
    }),
  }),
})

export const { useGetTickersQuery } = tickersApi
