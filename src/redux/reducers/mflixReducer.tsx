import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const MovieApi = createApi({
 reducerPath: 'MovieApi',

  baseQuery: fetchBaseQuery({
  baseUrl: 'https://dev-brinx.bloksports.com/admin/v1/get/',
 }),

 endpoints: (builder) => ({
  getAllPost: builder.query({
   query: () => ({
    url: 'interview-data',
    method: 'GET'
   })
  }),
 }),

})

export const { useGetAllPostQuery } = MovieApi