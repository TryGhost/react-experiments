import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { adminApi } from "./adminApi";
import { configSlice } from "./config";

export const store = configureStore({
  reducer: {
    [adminApi.reducerPath]: adminApi.reducer,
    config: configSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(adminApi.middleware),
});

setupListeners(store.dispatch);
