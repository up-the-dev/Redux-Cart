import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { act } from "react";

export const STATES = {
    pending: "PENDING",
    failed: "FAILED",
    ok: "OK"
}

const ProductSLice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        currentState: STATES.ok
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.pending, (state, action) => {
            state.currentState = STATES.pending
            return state
        }),
            builder.addCase(fetchProduct.fulfilled, (state, action) => {
                state.currentState = STATES.ok
                state.products = action.payload
                return state
            }),
            builder.addCase(fetchProduct.rejected, (state, action) => {
                state.currentState = STATES.failed
                return state
            })
    }
})


export const fetchProduct = createAsyncThunk('api/fetchProduct', async () => {
    const productsStream = await fetch('https://fakestoreapi.com/products')
    return await productsStream.json()
})
export default ProductSLice.reducer