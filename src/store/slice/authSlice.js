import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: "",
    refreshToken: ""
    
}
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        // addToCart: (state , actions)=> {}
    }
})
// export const {  } = authSlice.actions

export default authSlice.reducer