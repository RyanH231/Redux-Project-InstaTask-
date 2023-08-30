import React from 'react'
import Navbar from '../navbar'
import CompleteTask from '../completeTask';
import { currentDate } from '../utilities';
import { RootState } from '../../redux/store';
import { useSelector } from 'react-redux';
import "../../stylesheets/home.css";

type taskProp =
{
    username:String,
    title:String,
    text: String,
    completed:Boolean,
    date: String
}

export default function Completed() {
  const tasks = useSelector<RootState, taskProp[]>(state => state.task.completeTasks);
  return (
    <div>
        {<Navbar/>}
        <div className='loginContainer'>
         {tasks.map((task) => {
            return <CompleteTask task={task}/>
         })}
        </div>
    </div>
  )
}
