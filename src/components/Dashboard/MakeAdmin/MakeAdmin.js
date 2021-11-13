import React, { useEffect, useState,useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const {user} = useAuth();
    const emailRef = useRef();
    const [SingleServerUser,setSingleServerUser] = useState([]);
    console.log(SingleServerUser.role)
    const [loading,setloading ] = useState(false)
    
    //fetch  SingleServerUser
    useEffect(() => {
        fetch(`https://serene-bayou-47895.herokuapp.com/user/${user.email}`)
            .then(res => res.json())
            .then(data => setSingleServerUser(data))
    }, [user.email]);
    

    
// Make Admin 
const submitMakeAdmin =(e)=>{
    e.preventDefault();
    setloading(true);
    if(SingleServerUser.role === 'admin'){
        const url = `https://serene-bayou-47895.herokuapp.com/user`;
        fetch(url,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email:emailRef.current.value })
        })
        .then(res=> res.json())
        .then(data=>{
            // toast.success("Make admin")
            if(data.status === 404){
                emailRef.current.value='';
                toast.error("User Not Found");
                setloading(false);
                return;
            }
            if(data.modifiedCount > 0){
                emailRef.current.value='';
                toast.success("Make admin");
                setloading(false);
            }else{
                emailRef.current.value='';
                toast.success("already admin");
                setloading(false);
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }
    else{
        toast.warn("Sorry you are not admin")
    }
}
    return (
        <div>
                <div className="register_area">
                    <div className="register_form">
                        <form onSubmit={submitMakeAdmin}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Make Admin</label>
                                <input ref={emailRef} required type="email" className="form-control" id="handleReview" aria-describedby="emailHelp" />
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn_custom">{loading?"Loading...":'Make Admin'}</button>
                            </div>
                        </form>
                    </div>
                </div>
            <ToastContainer />
        </div>
    );
};

export default MakeAdmin;