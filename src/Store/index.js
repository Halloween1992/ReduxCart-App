import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./us-slice";
import cartReducer from "./cart-slice";

const store = configureStore({
  reducer: { ui: uiReducer, cart: cartReducer },
});

export default store;
