import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { adminApi } from "./adminApi";
import { configSlice } from "./config";

export const store = configureStore({
  reducer: persistReducer(
    { key: "config", version: 1, storage },
    combineReducers({
      [adminApi.reducerPath]: adminApi.reducer,
      config: configSlice.reducer,
    })
  ),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(adminApi.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
