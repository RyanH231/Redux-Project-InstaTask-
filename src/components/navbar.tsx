import React, {useState} from 'react'
import "../stylesheets/nav.css";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPlus, faTrash, faGem, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import {useNavigate} from "react-router-dom"
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { Signout } from '../firebase/authorization';

export default function Navbar() {

  const [searchTerm, setSearchTerm] = useState("");

  const nav = useNavigate();
  const HandleSubmit = (e: React.MouseEvent<HTMLButtonElement>, name:String) =>
  {
    e.preventDefault();

    if(name == "homeButton")
      nav("/home")
    else if(name=="completeButton")
      nav("/completed")
    else if(name=="addButton")
      nav("/add")
    else if(name=="deleteButton")
      nav("/delete")
    else if(name == "logoutButton")
    {
      Signout(e);
      nav("/");
    }
  }

  return (
   <div className='container'>

    <div className='header'>
      <h1 className='headingText'>Hodges Designs</h1>
      <input className='searchbar' placeholder="Search: " type="text" onChange={(e)=>(setSearchTerm(e.target.value))}></input>
    </div>
    <div className='navbar'>
        <div className="navLink">
          <button className='button' onClick={(e)=>HandleSubmit(e, "homeButton")}>
            <FontAwesomeIcon className="icon" icon={faHouse} />
            <br/>
            <h3 className='text'>Home</h3>
          </button>
        </div>

        <div className="navLink">
          <button className='button' onClick={(e)=>HandleSubmit(e, "completeButton")}>
            <FontAwesomeIcon className="icon" icon={faCheckCircle} />
            <br/>
            <h3 className='text'>Completed</h3>
          </button> 
        </div>
        
        <div className="navLink"> 
        <button className='button' onClick={(e)=>HandleSubmit(e, "addButton")}>
          <FontAwesomeIcon className="icon" icon={faPlus} />
            <br/>
          <h3 className='text'>Add</h3>
        </button>
        </div>
        
        <div className="navLink">
          <button className='button' onClick={(e)=>HandleSubmit(e, "deleteButton")}>
            <FontAwesomeIcon className="icon" icon={faTrash} />
            <br/>
            <h3 className='text'>Delete</h3>
          </button>
        </div> 
        
        <div className="navLink">
          <button className='button' onClick={(e)=>HandleSubmit(e, "logoutButton")}>
           <FontAwesomeIcon icon={faArrowRightFromBracket} />
            <br/>
            <h3 className='text'>Logout</h3>
          </button>
        </div> 
    </div>
   </div>
  )
}
