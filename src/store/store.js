import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slice/userSlice";
import { ordersReducer } from "./slice/ordersSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    orders: ordersReducer,
  },
});
