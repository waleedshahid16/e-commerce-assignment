import { createSlice } from "@reduxjs/toolkit";
import { ProductsData } from "../../utils/dummyData";

const initialState = {
  products: ProductsData,
  searchTerm: "",
};
export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchItem: (state, actions) => {
      state.searchTerm = actions.payload;
    },
  },
});
export const { searchItem } = searchSlice.actions;

export default searchSlice.reducer;
