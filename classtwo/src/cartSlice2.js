import { createSlice } from "@reduxjs/toolkit"
import cartslice from "./reducer/cartslice";


const initialState = {
    cart:[],
    quantity:0
}
const CartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        AddCart:(state,action)=>{
            state.cart.push(action.payload)
        }
    }
})
export  const {AddCart} = CartSlice.actions;
export default cartslice.reducers;