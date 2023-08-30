import {createSlice} from "@reduxjs/toolkit"


interface modalState 
{
    activated: boolean
}

const initialState = {activated:false} as modalState;
const modalSlice = createSlice({
    name:"activate",
    initialState,
    reducers:
    {
        Activate: (state)=>
        {
            state.activated = true;
        },
        Deactivate:(state)=>
        {
            state.activated = false;
        }
    }
})

export const {Activate, Deactivate} = modalSlice.actions;
export default modalSlice.reducer;