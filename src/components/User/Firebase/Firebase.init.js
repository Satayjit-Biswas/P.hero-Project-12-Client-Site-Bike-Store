import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.Config";

// Initialize Firebase
const initializeAuthentication = ()=>{
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;