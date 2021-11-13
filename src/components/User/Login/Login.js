import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import PageHeader from '../../Share/PageHeader/PageHeader';
import './Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const { handleEmailSign} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const [logemail,setLogEmail] = useState(' ');
    const [logpass,setLogPass] = useState(' ');
    const uri = location.state?.from || '/';
    const handleLogemail = e =>{
        setLogEmail(e.target.value);
    }
    const handleLogPass = e =>{
        setLogPass(e.target.value);
    }
    const LoginwithEmail = (e) =>{
        e.preventDefault()
        handleEmailSign(logemail , logpass)
            .then(() => {
                history.push(uri)
                toast.success('Successful');
            })
            .catch(err =>{
                toast.error(err.message);
            })
        console.log(logemail,logpass)
    }
    return (
        <div>
            <PageHeader text="Login here"></PageHeader>
            <div className="container">
                <div className="login_area">
                    <div className="login_form">
                        <form onSubmit={LoginwithEmail}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input onBlur={handleLogemail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                <input onBlur={handleLogPass} type="password" className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div className="err">
                                    
                                </div>
                            <div className="text-center">
                                <button type="submit" className="btn_custom">Login</button>
                            </div>
                        </form>
                        <div className="login_others">
                            <p className="mt-3">Create a New <NavLink to="/register">Register</NavLink></p>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;