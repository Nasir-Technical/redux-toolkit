import { CreateSlice } from "@reduxjs/toolkit";



const Cartslice = CreateSlice({
    name: "cart",
    initialState: [],

    reducers: {
        add(state,action){
            state.push(action.payload);
        },

        del(state,action){
            return state.filter((item)=> item.id !== action.payload);
        },
    },
});

export const {add , del} = Cartslice.actions;
export default Cartslice.reducer;