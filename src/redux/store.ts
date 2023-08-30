import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";
import authReducer from "./authSlice";
import taskReducer from "./taskSlice";

export const store = configureStore({
    reducer:{
        modal:modalReducer,
        auth: authReducer,
        task: taskReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;