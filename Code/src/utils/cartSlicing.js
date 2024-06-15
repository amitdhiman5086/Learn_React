import { createSlice } from "@reduxjs/toolkit";

const cartSlicing = createSlice({
  name: "cart",
  initialState: {
    item: [],
  },
  reducers: {
    additem: (state, action) => {
      state.item.push(action.payload);
    },
    removeOne: (state) => {
      state.item.pop();
    },
    clearCart: (state) => {
      state.item = [];
    },
  },
});

export const {additem,removeOne,clearCart} = cartSlicing.actions;
export default cartSlicing.reducer ;

