import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import PageHeader from '../../Share/PageHeader/PageHeader';
import './Register.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Register = () => {
    const {handleRegistration,updateName,UserServer} = useAuth();
    const [regname,setRegname] = useState(' ');
    const [regemail,setEmail] = useState(' ');
    const [regpass,setPass] = useState(' ');
    const [error,setError] = useState(' ');
    const [loading,setloading] = useState(false)
    

    const handleName = e =>{
        setRegname(e.target.value);
    }
    const handleEmail = e =>{
        setEmail(e.target.value);
    }
    const handlePass = e =>{
        setPass(e.target.value);
    }
    // Email password 
    const submitRegistration = (e) => {
        e.preventDefault()
        setloading(true)
        if(regpass.length <6){
            setError('Must be Need 6 Characters long.')
            return;
        }
        handleRegistration(regemail,regpass)
        .then((adduser) => {
            console.log(adduser);
            // send server 
            UserServer(regname,regemail,'POST');
            updateName(regname);
            setError('');
            toast.success("Add user");
            setloading(false)
        }).catch(err => {
            setError(err.message)
            toast.error(err.message);
            setloading(false)
        })
        
    }
    return (
        <div>
        <PageHeader text='Register now'></PageHeader>
            <div className="container">
                <div className="register_area">
                    <div className="register_form">
                        <form onSubmit={submitRegistration}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                <input onBlur={handleName} required type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input onBlur={handleEmail} required type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" onBlur={handlePass} required className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div className="text-center">
                                <div className="err">
                                    {error}
                                </div>
                            <button type="submit" className="btn_custom">{loading?'Loading...':'Register'}</button>
                            </div>
                        </form>
                        <div className="login_others">
                            <p className="mt-3">I have Already <NavLink to="/login">Account</NavLink></p>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;