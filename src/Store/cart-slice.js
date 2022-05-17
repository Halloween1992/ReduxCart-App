import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
    totalPrice: 0,
    ischaged: false,
  },
  reducers: {
    replace(state, action) {
      state.items = action.payload.items;
      state.totalAmount = action.payload.totalAmount;
      state.totalPrice = action.payload.totalPrice;
    },
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalAmount++;
      state.totalPrice = state.totalPrice + newItem.price;
      state.ischaged = true;
      setTimeout(() => {}, 1000);

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          amount: 1,
          totalPrice: newItem.price,
        });
      }

      if (existingItem) {
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
        existingItem.amount = existingItem.amount + 1;
      }
    },

    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalAmount--;
      state.totalPrice = state.totalPrice - existingItem.price;
      state.ischaged = true;

      if (existingItem.amount === 1)
        state.items = state.items.filter((item) => item.id !== id);

      if (existingItem.amount > 1) existingItem.amount--;
      existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
