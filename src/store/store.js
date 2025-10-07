import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../store/slice/cartListSlice";
import AuthReducer from "../store/slice/authSlice";
import SearchReducer from "../store/slice/searchSlice";

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    auth: AuthReducer,
    search: SearchReducer,
  },
});
