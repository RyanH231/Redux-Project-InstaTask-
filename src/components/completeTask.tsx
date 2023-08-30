import React from 'react'
import { useDispatch } from 'react-redux'
import { Incomplete } from '../redux/taskSlice'


type taskProp =
{
    username:String,
    title:String,
    text: String,
    date: String
}

interface TaskProp
{
    task:taskProp
}

export default function CompleteTask(prop:TaskProp) {
    const dispatch = useDispatch();
    const HandleClick = () => {
        let name = prop.task.title;
        dispatch(Incomplete({name:name}));
       
    }

  return (
    <div className='taskContainer'>
        <div className='title'>
        <label className='titleText ' >{prop.task.title}</label>
            <div>
                <label className='titleText'> Incomplete?</label>
                <input type="checkbox" onChange={() => {HandleClick()}}></input>    
            </div>        
        </div>
       
        <div className='details'>
            <h3>{prop.task.text}</h3>
        </div>

        <div className='timestamp'>
         <h3>Performed by {prop.task.username} on {prop.task.date.toString()} </h3>
        </div>
    </div>
  )
}
