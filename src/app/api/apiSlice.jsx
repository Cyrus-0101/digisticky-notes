import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4500/api" }),
    tagTypes: ['Note', 'User'],
    endpoints: (builder) => ({})
});