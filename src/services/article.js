import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const rapidapiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;


const options = {
  method: 'GET',
  url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
  params: {
    url: 'https://time.com/6266679/musk-ai-open-letter/',
    lang: 'en',
    engine: '2'
  },
  headers: {
    'x-rapidapi-key': '4bd81de27dmshd691178c592cdaap129231jsn68b67123ba8a',
    'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
  }
};


export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers)=>{
            headers.set('x-rapidapi-key', rapidapiKey);
            headers.set('x-rapidapi-host', 'article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        }
    }),
    endpoints: (builder) =>({
        getSummary: builder.query({
            query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}`
        })
    })
});

export const { useLazyGetSummaryQuery } = articleApi;