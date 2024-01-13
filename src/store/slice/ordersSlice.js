import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = [];

let id = 0;

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state, action) => {
      let { cargo, city, postOffice } = action.payload;

      cargo = cargo.length > 0 ? cargo : "Не встановленно";

      city = city.length > 0 ? city : "Не встановленно";

      postOffice = postOffice.length > 0 ? postOffice : 0;

      return [
        ...state,
        {
          ...action.payload,
          id: id++,
          cargo,
          city,
          postOffice,
          accountInstagram: "link to chat",
          weight: 0,
          status: "В обробці",
          comment: "Some comment",
        },
      ];
    },

    changeOrderData: (state, action) => {
      const { idOrder, nameField, data } = action.payload;
      state.forEach((order) => {
        if (order.id == idOrder) {
          if (nameField === "products") {
            order[nameField].length = 0;
            order[nameField].push(data);
          } else {
            order[nameField] = data;
          }
        }
      });
    },
  },
});

export const ordersReducer = ordersSlice.reducer;

export const { addOrder, changeOrderData } = ordersSlice.actions;

export const useOrdersSelector = () => useSelector((state) => state.orders);
