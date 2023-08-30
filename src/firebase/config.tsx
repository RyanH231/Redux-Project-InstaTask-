import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmt9qYhoCJhHr40Aa_drr6VgsE-jXxtiw",
  authDomain: "insta-task-ce209.firebaseapp.com",
  projectId: "insta-task-ce209",
  storageBucket: "insta-task-ce209.appspot.com",
  messagingSenderId: "563844565774",
  appId: "1:563844565774:web:e1775c90fde9655f84655f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};