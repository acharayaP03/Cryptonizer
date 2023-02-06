
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { headers as cryptoApiHeaders, baseUrl } from "./headers";

const createRequest = (url: string) => ({ url, headers: cryptoApiHeaders})
export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({ query: (count) => createRequest(`/coins?limit=${count}`)}),
        getCryptoDetails: builder.query({ query: (coinId) => createRequest(`/coin/${coinId}`)}),
        getCryptoHistory: builder.query({ query: ({coinId, referenceUuid, timeperiod}) => createRequest(`/coin/${coinId}/history?referenceCurrencyUuid=${referenceUuid}&timePeriod=${timeperiod}`)}),
        getCryptoCurrencyUuid: builder.query({ query: () => createRequest(`/reference-currencies`)}),
    })

})

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery,
    useGetCryptoCurrencyUuidQuery
} = cryptoApi