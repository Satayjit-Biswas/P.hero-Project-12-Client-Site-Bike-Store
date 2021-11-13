import { getAuth,signOut,onAuthStateChanged,createUserWithEmailAndPassword ,updateProfile,signInWithEmailAndPassword  } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/User/Firebase/Firebase.init";
import img from '../assets/user_logo.png'

initializeAuthentication();
const useFirebase = () =>{
    const [user,setUser] = useState({});
    const [dataComing,setDataComing] = useState(true)
    const auth = getAuth();
    


    // update name 
    const updateName =(name) => {
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: img
        }).then(() => {
            console.log('Update User')
            window.location.href = "/home";
        })
    }
    // Email password 
    const handleRegistration = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
     // Email sign 
    const handleEmailSign = (email, password) => {
        setDataComing(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // State Changed 
    useEffect(()=>{
        const notsubscibed = onAuthStateChanged(auth,user => {
            if (user){
                setUser(user)
            }
            else{
                setUser({})
            }
            setDataComing(false);
            
        })
        return() => notsubscibed;
    },[])

    // log out 
    const logOut = () =>{
        setDataComing(true);
        signOut(auth)
        .then(() => {
        })
        .finally(() => setDataComing(false));
    }
    // server work 
    // add to user in server 
    const UserServer = (name,email,method)=>{
        const adduser = {name:name,email:email,role:'member'};
        fetch('https://serene-bayou-47895.herokuapp.com/user', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(adduser)
        })
        .then()
    }

    return {
        user,
        logOut,
        dataComing,
        handleRegistration,
        handleEmailSign,
        updateName,
        UserServer,
    }
}

export default useFirebase;