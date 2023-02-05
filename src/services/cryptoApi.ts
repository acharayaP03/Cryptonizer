
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { headers as cryptoApiHeaders, baseUrl } from "./headers";

const createRequest = (url: string) => ({ url, headers: cryptoApiHeaders})
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({ query: (count) => createRequest(`/coins?limit=${count}`)})
    })

})

export const {
    useGetCryptosQuery
} = cryptoApi