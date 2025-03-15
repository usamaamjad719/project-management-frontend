// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../redux/features/counter/counterSlice";
import authReducer from "../redux/services/authApi"; // Include the auth reducer
import { authApi } from "../redux/services/authApi";

// Create and configure the Redux store
const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer, // Add auth reducer
    [authApi.reducerPath]: authApi.reducer,
  },
  // Adding the API middleware enables caching, invalidation, polling, and other services of RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export default store;
