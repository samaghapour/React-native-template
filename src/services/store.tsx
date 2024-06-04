import {configureStore} from "@reduxjs/toolkit";
import {dashboardApi} from "./dashbaordApi";

export const store = configureStore({
  reducer: {
    [dashboardApi.reducerPath]: dashboardApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(dashboardApi.middleware),
});
