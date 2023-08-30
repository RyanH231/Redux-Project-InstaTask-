import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import {currentDate} from "../utilities";
import Navbar from '../navbar';
import "../../stylesheets/addTask.css";
import { AddTask } from '../../redux/taskSlice';
import { auth } from '../../firebase/config';

type taskProp = {
  username:String,
  title:String,
  text: String,
  completed:Boolean,
  date: String
}

export default function Add() {
  
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const dispatch = useDispatch();
  const user = auth.currentUser;
  let userEmail:String = user!.email!;

  const HandleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let task:taskProp = {
      username:userEmail,
      title: title,
      text: details,
      completed:false,
      date: currentDate    
    }
    dispatch(AddTask({task:task}))
    alert("Task added!");
  }
  
  return (
    <div>
        {<Navbar/>}
        <form className="postForm" onSubmit={(e)=>HandleSubmit(e)}>
            <label className='label'>Enter a name for the task:</label>
            <br/>
            <input className="name" type="text" placeholder="Task name:" onChange={(e)=>setTitle(e.target.value)}></input>
            <br/>
            <label className='label'>Would you like to provide additional details for the task?</label>
            <br/>
            <textarea  className="details" placeholder='Details:' onChange={(e)=>setDetails(e.target.value)} rows={4} cols={5}></textarea>
            <br/>
            <button type="submit">Submit new task</button>
            <br/>
        </form>
    </div>
  )
}
