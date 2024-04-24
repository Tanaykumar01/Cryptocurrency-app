import {createApi , fetchBaseQuery} from '@reduxjs/toolkit/query/react'

// const cryptoNewsHeaders = {
//     'X-RapidAPI-Key': '1defcb82e6msh1055a22f7be1d9fp15758djsnefcc96d98bcf',
//     'X-RapidAPI-Host': 'google-news13.p.rapidapi.com'
// }
const cryptoNewsHeaders = {
    'X-Api-Key': '4ca26e8e0dc94b768d48f049fecf0089',
}

// const baseUrl = 'https://google-news13.p.rapidapi.com';
const baseUrl = 'https://newsapi.org/v2';
const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });
// https://newsapi.org/v2/everything?q=crypto&apiKey=4ca26e8e0dc94b768d48f049fecf0089
export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
    //   query: ({ newsCategory, count }) => createRequest(`/everything?q=${newsCategory}&apiKey=4ca26e8e0dc94b768d48f049fecf0089&count=${count}`)
      query: ({ newsCategory, count }) => createRequest(`/everything?q=${newsCategory}&pageSize=${count}&apiKey=4ca26e8e0dc94b768d48f049fecf0089`)
    })
  })
});

export const { 
    useGetCryptoNewsQuery
} = cryptoNewsApi;