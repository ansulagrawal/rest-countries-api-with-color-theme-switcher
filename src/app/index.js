import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { countryApi } from "./apiSlices/api";

export const store = configureStore({
  reducer: {
    [countryApi.reducerPath]: countryApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(countryApi.middleware),
});

setupListeners(store.dispatch);
