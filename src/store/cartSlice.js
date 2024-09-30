import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add: (state, action) => {
            console.log("adding to cart")
            state.push(action.payload)
        },
        remove: (state, action) => {
            return state.filter((item) => {
                console.log(item, action)
                return item.id !== action.payload.id
            })
        }
    }
})
export const { add, remove } = cartSlice.actions
export default cartSlice.reducer 
