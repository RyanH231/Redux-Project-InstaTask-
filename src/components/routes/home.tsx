import React from 'react'
import Navbar from '../navbar'
import Task from '../incompleteTask';
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

export default function Home() {
  const tasks = useSelector<RootState, taskProp[]>(state => state.task.incompleteTasks);
  return (
    <div>
        {<Navbar/>}
        <div className='loginContainer'>
         {tasks.map((task) => {
            return <Task task={task}/>
         })}
        </div>
    </div>
  )
}
