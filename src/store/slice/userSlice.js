import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = null;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      return action.payload;
    },
    logout: (state) => {
      return null;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { login, logout } = userSlice.actions;
export const useUserSelector = () => useSelector((state) => state.user);
