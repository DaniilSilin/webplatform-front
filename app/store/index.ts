// import { configureStore } from '@reduxjs/toolkit'
// import storeReducer from './slices/storeSlice'
// import { accountsApi } from './api/accountsApi'

// export const store = configureStore({
//   reducer: {
//     store: storeReducer,
//     [accountsApi.reducerPath]: accountsApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(accountsApi.middleware),
// })

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch

import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { accountsApi } from "./api/accountsApi";
import djangoSliceReducer from "./slices/storeSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      djangoSlice: djangoSliceReducer,
      [accountsApi.reducerPath]: accountsApi.reducer,
    },
    middleware: (gDM) => gDM().concat(accountsApi.middleware),
  });

// Создаем wrapper для Next.js
export const wrapper = createWrapper(makeStore, { debug: true });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];