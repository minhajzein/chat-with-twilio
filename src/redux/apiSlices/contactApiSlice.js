
import { apiSlice } from "../../apis/apiSlice";





const contactApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getContacts: builder.query({
            query: () => ({
                url: '/api/contacts',
                validateStatus: (response, result) => response.status === 200 && !result.isError
            }),
            keepUnusedDataFor: 5,
            providesTags: ["Contacts"],
        }),
    })
})


export const { useGetContactsQuery } = contactApiSlice


