import React, {useState} from 'react'
import Navbar from '../navbar'
import "../../stylesheets/deleteTask.css";
import { useDispatch } from 'react-redux';
import { DeleteTask } from '../../redux/taskSlice';

export default function Delete() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const HandleDelete = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    dispatch(DeleteTask({name:title}));
  }

  return (
    <div>
        {<Navbar/>}
        <form className="delForm" onSubmit={(e) => HandleDelete(e)}>
            <label>Enter the name of the task to delete: </label>
            <br/>
            <input type="text" placeholder='Task Name' onChange={(e)=>setTitle(e.target.value)}></input>
            <br/>
            <button type='submit'>Delete Task?</button>
            <br/>
        </form>
    </div>
  )
}
