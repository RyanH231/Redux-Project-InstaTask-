import {createSlice} from "@reduxjs/toolkit"
import { currentDate, taskProp } from "../components/utilities"

const initialState: taskProp = {
    incompleteTasks:[
        {
            username:"Bob",
            title:"Queen",
            text:"The fishstick queen",
            completed: false,
            date: currentDate
        }
    ], 
    completeTasks:[]
}

const taskSlice = createSlice({
    name:"Tasks",
    initialState,
    reducers:
    {
        Completed: ((state, action)=>{
            let tasks = state.incompleteTasks;
            let task = tasks.filter((task) => {return action.payload.name === task.title})
        
            state.completeTasks.push(...task);
            state.incompleteTasks = tasks.filter((task) => { return action.payload.name !== task.title});
        }),

        Incomplete: ((state,action) => {
            let tasks = state.completeTasks;
            let task = tasks.filter((task) => {return action.payload.name === task.title})
        
            state.incompleteTasks.push(...task);
            state.completeTasks = tasks.filter((task) => { return action.payload.name !== task.title});
        }),

        AddTask:((state, action) => {
            state.incompleteTasks.push(action.payload.task);
        }),

        DeleteTask:((state,action) => {
            let tasks = state.incompleteTasks;
            state.incompleteTasks = tasks.filter((task) => {return action.payload.name.toLowerCase() !== task.title.toLowerCase()});
            alert("Task deleted");
        })
    }
})

export const {Completed,Incomplete, AddTask, DeleteTask} = taskSlice.actions;
export default taskSlice.reducer;