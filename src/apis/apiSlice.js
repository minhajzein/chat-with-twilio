import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../config/baseUrl";

// imports................................................................................................

const drScentBaseQuery = fetchBaseQuery({
    baseUrl: baseUrl,
    credentials: 'omit',
    timeout: 15000,
    prepareHeaders: (headers) => {
        headers.set('Accept', 'application/json');
        headers.set('Cache-Control', 'no-cache');
        headers.set('Pragma', 'no-cache');
        headers.set('Expires', '0');

        return headers
    }
})


export const apiSlice = createApi({
    reducerPath: 'messageService',
    baseQuery: drScentBaseQuery,
    tagTypes: ['Messages', 'Contacts'],
    endpoints: builder => ({})
})


