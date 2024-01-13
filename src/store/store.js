import { configureStore } from "@reduxjs/toolkit";
import { userListReducer } from "./slice/userListSlice";
import { userReducer } from "./slice/userSlice";
import { ordersReducer } from "./slice/ordersSlice";

export const store = configureStore({
  reducer: {
    userList: userListReducer,
    user: userReducer,
    orders: ordersReducer,
  },
});
