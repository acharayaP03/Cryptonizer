import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const headers = {
    // 'X-BingApis-SDK': 'true',
    // 'X-RapidAPI-Key': '2406d572c4msh3b45e698894d40fp17782ejsn51cb7954b272',
    // 'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

//export const baseUrl = 'https://bing-news-search1.p.rapidapi.com'
export const baseUrl = ''

const createRequest = (url: string) => ({ url, headers})

export const createCryptoNewsApi = createApi({
    reducerPath: 'createCryptoNewsApi',
    baseQuery: fetchBaseQuery(
        { baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({ query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=0ff&textFormat=Raw&freshness=Day&count=${count}`)})
    })

})

export const {
    useGetCryptoNewsQuery
} = createCryptoNewsApi