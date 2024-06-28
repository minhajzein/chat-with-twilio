import { apiSlice } from "../../apis/apiSlice";

// imports................................................................

const messageApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getMessages: builder.query({
            query: telenumber => ({
                url: `/api/messages/${telenumber}`,
                validateStatus: (response, result) => {
                    return response.status === 200 && !result.isError
                },
            }),
            keepUnusedDataFor: 5,
            providesTags: ["Messages"],
        }),

        getReplys: builder.mutation({
            query: () => ({
                url: '/api/incoming',
                method: 'POST'
            }),
            invalidatesTags: ["Messages"]
        }),

        sendMessage: builder.mutation({
            query: (credentials) => ({
                url: '/api/send',
                method: 'POST',
                body: { ...credentials }
            }),
            invalidatesTags: ['Messages']
        })
    })
})

export const { useGetMessagesQuery, useSendMessageMutation, useGetReplysMutation } = messageApiSlice

