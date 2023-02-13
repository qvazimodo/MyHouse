import {createSlice} from "@reduxjs/toolkit";

const passwordReset = createSlice({
    name: "passwordReset",
    initialState:{
        code:''
    },
    reducers:{
        addPassword(state,action){
            state.code = action.payload.code
        },
    },
});

export default passwordReset.reducer;

export const {addPassword} = passwordReset.actions;

