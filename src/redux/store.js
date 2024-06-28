import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../apis/apiSlice";

const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer
    }, middleware: (getDefaultMiddleware) => {
        const allMiddlewares = [
            apiSlice.middleware
        ]
        return getDefaultMiddleware({ serializableCheck: false }).concat(...allMiddlewares)
    },
    devTools: true
})

export default store