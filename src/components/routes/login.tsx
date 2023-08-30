import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../redux/store'

import {useNavigate} from "react-router-dom"
import { Activate } from '../../redux/modalSlice';
import "../../stylesheets/login.css"
import OpenModal from '../modal';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { signinSuccess, signinFail } from '../../redux/authSlice';

//Default return function
export default function Login() {
  const [username, SetUsername] = useState("");
  const [password, SetPassword] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const activated = useSelector((state:RootState) => state.modal.activated);
  const authorized = useSelector((state:RootState) => state.auth.signedIn);

  const dispatch = useDispatch();
  const nav = useNavigate();


  const Signin = (e:React.FormEvent<HTMLFormElement>) =>
{
    e.preventDefault();
    signInWithEmailAndPassword(auth, username, password).then(() => {
        dispatch(signinSuccess());
        nav("/home")
     }).catch((error) => {
        console.log(error.message);
        dispatch(signinFail());
        alert("Login Unsuccessful (User not registered)");
     })
}
  //Button functions
  const HandleSignup = (e:React.MouseEvent<HTMLButtonElement>) =>
  {
    e.preventDefault();
    dispatch(Activate());
  }
  //-------------------
  
  return (
    <div className='pageContainer'>
        
        <caption className='flexChild sideText'>
            <h1 className='title'>Insta-Task</h1>
            <h2 className="subTitle">An app for keeping track of the things you have to do.</h2>
        </caption>

            <form onSubmit={(e) => Signin(e)} className='flexChild signupForm'>
                <label className="user" htmlFor='Username'>Enter your email: </label>
                <input className='userInput' type='text'  onChange={(e) => SetUsername(e.target.value)} placeholder='Email'></input>
                <br/>
                <label className="password" htmlFor='Password'>Enter your password: </label>
                <input className="passwordInput" type="password" onChange={(e) => SetPassword(e.target.value)} placeholder='Password'></input>
                <br/>
                <button className="login" type="submit">Login</button>
                <hr className='line'/>

                <button className='signup' type="submit" onClick={(e) => HandleSignup(e)}>Create a User?</button>
            </form>
            <OpenModal/>
            <footer className='footer'></footer>
    </div>
  )
}
