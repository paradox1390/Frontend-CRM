import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import { register, login, sendConfirmCode } from "@/api";


const initialState = {
  loading: false,
  data: null,
  error: null,
};

export const registrationUser = createAsyncThunk("registration-user", register);

export const loginUser = createAsyncThunk("login-user", login);

export const confirmUser = createAsyncThunk("confirm-user", sendConfirmCode);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registrationUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registrationUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(registrationUser.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.payload;
      })
      .addCase(confirmUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(confirmUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(confirmUser.rejected, (state, action) => {
        state.loading = false;
        state.data = null;
        state.error = action.payload;
      });
  },
});

export const userReducer = userSlice.reducer;
export const { logout } = userSlice.actions;
export const useUserSelector = () => useSelector((state) => state.user);
