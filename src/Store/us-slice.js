import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isCartShown: false,
    notification: "",
  },
  reducers: {
    toggleCart(state) {
      state.isCartShown = !state.isCartShown;
    },

    notification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const uiSliceActions = uiSlice.actions;

export default uiSlice.reducer;
