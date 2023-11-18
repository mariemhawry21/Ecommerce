import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cart/cartSlice";
import modalReducer from "./cart/modalSlice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});
