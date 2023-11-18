import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: 0,
  amount: 0,
  price: 125,
  total: 0,
  open: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state) => {
      state.amount += 1;
    },
    removeFromCart: (state) => {
      if (state.amount == 0) return;
      state.amount -= 1;
    },
    toggleOpen: (state) => {
      state.open = !state.open;
    },
    countItems: (state) => {
      state.items += 1;
    },
    calculateTotal: (state) => {
      let newPrice = state.price * state.amount;
      state.total = newPrice;
    },
    Result: (state) => {
      state.total = state.amount * state.price;
    },
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  removeFromCart,
  toggleOpen,
  countItems,
  calculateTotal,
  Result,
} = cartSlice.actions;
