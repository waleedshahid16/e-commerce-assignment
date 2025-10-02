import { createSlice } from "@reduxjs/toolkit";
import { ProductsData } from "../../utils/dummyData";

const initialState = {
    Products : ProductsData,
    
}
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
        // addToCart: (state , actions)=> {}
    }
})
export const { addToCart } = cartSlice.actions

export default cartSlice.reducer