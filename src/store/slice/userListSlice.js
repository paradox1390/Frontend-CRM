import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import { generateCode } from "@/utils/utils";
import { USER_LIST } from "@utils/initial";

let id = 0;

const initialState = USER_LIST.map((user) => {
  return { ...user, id: id++, confirmed: true, confirmCode: "" };
});

const userListSlice = createSlice({
  name: "userList",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { fullName, email, phone } = action.payload;
      const newUser = {
        fullName,
        email,
        phone,
        password: generateCode(),
        id: id++,
        confirmed: false,
        confirmCode: generateCode(),
      };
      return [...state, newUser];
    },
  },
});

export const userListReducer = userListSlice.reducer;

export const { addUser } = userListSlice.actions;

export const useUserListSelector = () => useSelector((state) => state.userList);
