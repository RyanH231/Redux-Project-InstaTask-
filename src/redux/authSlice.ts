import {createSlice} from "@reduxjs/toolkit"

interface authState  {
    signedIn: boolean
}

let initialState = {signedIn:false} as authState

const authSlice = createSlice({
    name:"Authorization",
    initialState,
    reducers:{
        signinSuccess: (state) => {
            state.signedIn = true;
        },
        signinFail: (state) => {
            state.signedIn = false;
        }
    }    
})

export const {signinSuccess, signinFail } = authSlice.actions;
export default authSlice.reducer;