import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openModal: false,
};
const modalReducer = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleOpen: (state) => {
      state.openModal = !state.openModal;
    },
  },
});
export default modalReducer.reducer;
export const { toggleOpen } = modalReducer.actions;
