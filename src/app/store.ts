import { configureStore } from '@reduxjs/toolkit';

import { cryptoApi } from "../services/cryptoApi";
import { createCryptoNewsApi } from "../services/createCryptoNewsApi";

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath] : cryptoApi.reducer,
        [createCryptoNewsApi.reducerPath] : createCryptoNewsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cryptoApi.middleware, createCryptoNewsApi.middleware)
})