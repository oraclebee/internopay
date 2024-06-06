import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// let ApiKey ='0da537d340mshc80cdfd3774d48ep1fb564jsnbf1c0de925d6'
const ApiKey ="c3dea401179249dd8b8071db0f490c87"
// const baseUrl ='https://news-api14.p.rapidapi.com/top-headlines'
const baseUrl ='https://newsapi.org/v2/top-headlines'

//! ca. Possible options: business, science, sports, entertainment, health, technology Default value: all categories
export const authNews = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({
      baseUrl,
      prepareHeaders: (headers) => {
        headers.set('x-api-key', ApiKey);
        return headers;
      },
    }),
    endpoints: (builder) => ({
      getNews: builder.query({
        query: ({ category = 'business' }) => ({
          url: '',
          method: 'GET',
          params: {
            country: 'us',
            category,
          },
        }),
      }),
    }),
  });
  
  export const { useGetNewsQuery } = authNews;