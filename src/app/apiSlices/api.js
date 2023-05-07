import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const countryApi = createApi({
  reducerPath: "countryApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://restcountries.com/v3.1" }),
  endpoints: builder => ({
    getAllCountries: builder.query({
      query: name => {
        if (name === "") {
          return "all";
        } else return `name/${name.trim()}`;
      },
      transformResponse: response => {
        response.sort((a, b) => {
          if (a.name.common < b.name.common) {
            return -1;
          }
          if (a.name.common > b.name.common) {
            return 1;
          }
          return 0;
        });
        return response;
      },
    }),
    getCountryDetail: builder.query({
      query: name => {
        return `name/${name.trim()}?fullText=true`;
      },
    }),
    getBorderCountries: builder.query({
      query: name => {
        return `alpha?codes=${name}`;
      },
    }),
  }),
});

export const { useGetAllCountriesQuery, useGetCountryDetailQuery, useGetBorderCountriesQuery } = countryApi;
