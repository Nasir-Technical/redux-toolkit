import { createSlice } from "@reduxjs/toolkit";




const Singupslice = createSlice({

    name: "Singup",
    initialState: {
        user: "Singup successfully",
    },
    reducers:{
        add(state,action){
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.password = action.payload.password;
        },
        del(){},
    },
})

export const {add,del} = Singupslice.actions
export default Singupslice.reducer; 