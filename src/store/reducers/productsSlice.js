import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productData : []
}


const productSlice = createSlice({
    name : "product",
    initialState,
    reducers : {
        loadProduct : (state,action) => {
            state.productData = action.payload;
        }
    }
})

export default productSlice.reducer;
export const {loadProduct} = productSlice.actions;