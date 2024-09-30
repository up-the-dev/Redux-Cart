import { configureStore } from "@reduxjs/toolkit";
import cartReducers from './cartSlice'
import productSlice from "./productSlice";

const store = configureStore({
    reducer: {
        cart: cartReducers,
        product: productSlice
    }
})
export default store