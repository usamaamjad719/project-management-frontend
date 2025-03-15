// src/services/auth/authApiSlice.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSlice } from "@reduxjs/toolkit";
import BASE_URL from "../../config";

// Create an auth slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: !!localStorage.getItem("access"),
    accessToken: null,
  },
  reducers: {
    setCredentials: (state, action) => {
      state.isAuthenticated = true;
      state.accessToken = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.accessToken = null;
      localStorage.removeItem("access"); // Clear token from local storage
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

// Create the API slice
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/token/",
        method: "POST",
        body: credentials,
      }),
      // Handle fulfilled state
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setCredentials(data.access)); // Store the token
          localStorage.setItem("access", data.access); // Save token to local storage
        } catch (error) {
          console.error("Login failed:", error);
        }
      },
    }),
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "/register/",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterUserMutation } = authApi;
export default authSlice.reducer; // Export the auth reducer
