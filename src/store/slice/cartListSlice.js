import { createSlice } from "@reduxjs/toolkit";
import { ProductsData } from "../../utils/dummyData";

const initialState = {
  Products: ProductsData,
  cartList: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, actions) => {
      const item = actions.payload;
      const existingItem = state.cartList.find((prod) => prod.id === item.id);
      existingItem
        ? (existingItem.quantity += 1)
        : state.cartList.push({ ...item, quantity: 1 });
    },
    removeFromCart: (state, actions) => {
      const item = actions.payload;
      const existingItem = state.cartList.find((prod) => prod.id === item.id);

      if (existingItem) {
        existingItem.quantity > 1
          ? (existingItem.quantity -= 1)
          : (state.cartList = state.cartList.filter(
              (prod) => prod.id !== item.id
            ));
      }
    },
  },
});
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
