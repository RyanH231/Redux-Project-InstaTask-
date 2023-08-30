import React, {useState} from 'react'
import Modal from "react-modal"

import { Deactivate } from '../redux/modalSlice';
import type { RootState } from '../redux/store'
import { useDispatch, useSelector } from 'react-redux'

import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword, getAuth, updateCurrentUser, updateProfile } from 'firebase/auth';
import { signinSuccess, signinFail } from '../redux/authSlice';


export default function OpenModal() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const activated = useSelector<RootState, boolean>(state => state.modal.activated);
  const dispatch = useDispatch();

  const Signup = (e:React.FormEvent<HTMLFormElement>) =>
  {
      e.preventDefault(); 
      createUserWithEmailAndPassword(auth, email, password).then(() => {
          alert("User created.")
          dispatch(signinSuccess());
      }).catch((error) => {
          console.log(error.message);
          dispatch(signinFail());
          alert("User not created!");
      })
      dispatch(Deactivate());
  }
  return (
    <div className='modal'>
              <Modal className="modalPopUp" isOpen={activated}>
                  <div className='modalForm'>
                    <h1> Sign-Up</h1>
                    <br/>
                    <form onSubmit={(e) => Signup(e)}>
                      <br/>
                      <label className="user" htmlFor='Username'>Please enter your email: </label>
                      <input className='userInput' type='email' onChange={(e)=>setEmail(e.target.value)} placeholder='Email'></input>
                      <br/>
                      <label className="password" htmlFor='Password'>Please enter a password: </label>
                      <input className="passwordInput" type="password" onChange={(e)=>setPassword(e.target.value)}
                        placeholder='Password'></input>
                      <br/><br/>
                      <button type="submit">Create User</button>
                    </form>
                  </div>
              </Modal>
            </div>
  )
}
