import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
let ApiKey ='0da537d340mshc80cdfd3774d48ep1fb564jsnbf1c0de925d6'
//! https://apyhub.com/dashboard
//! https://currency-conversion-and-exchange-rates.p.rapidapi.com
//! https://countrylayer.com/documentation/
//! https://news-api14.p.rapidapi.com/top-headlines
const baseUrl ='https://currency-conversion-and-exchange-rates.p.rapidapi.com'
export const authConvert = createApi({
    reducerPath: 'convertApi',
    baseQuery: fetchBaseQuery({
      baseUrl,
      prepareHeaders: (headers) => {
        headers.set('x-rapidapi-key', ApiKey);
        headers.set('x-rapidapi-host', 'currency-conversion-and-exchange-rates.p.rapidapi.com');
        return headers;
      },
    }),
    endpoints: (builder) => ({
      getSymbol: builder.query({
        query: () => '/symbols',
      }),
      getConvertCurrency: builder.query({
        query: ({currencyFrom,currencyTo,amountFrom}) => ({
          url: `/convert`,
          method: 'GET',
          params: {
            from: currencyFrom,
            to: currencyTo,
            amount: amountFrom,
          },
        }),
      }),
    }),
  });
  
  export const { useGetSymbolQuery ,useGetConvertCurrencyQuery} = authConvert;