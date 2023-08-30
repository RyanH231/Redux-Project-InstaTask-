import { auth } from "./config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { signinFail, signinSuccess } from "../redux/authSlice";
import {useNavigate} from "react-router-dom"



const Signout = (e:React.MouseEvent<HTMLButtonElement>) =>
{
    e.preventDefault();
    

    signOut(auth).then(()=> {
        console.log("Successful Signout");
    }).catch(()=>{
        alert("Not successful sign out. Try again please.");
    });
}

export {Signout};