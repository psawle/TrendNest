import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartsData : []
}

export const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers : {
        loadCart : (state,action) => {
            state.cartsData = action.payload;
        }
    }
})

export default cartSlice.reducer;
export const {loadCart} = cartSlice.actions