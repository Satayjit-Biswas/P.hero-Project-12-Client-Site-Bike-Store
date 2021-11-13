import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import TopHeader from './TopHeader';
import './Header.css'
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div className="header_area">
            <TopHeader></TopHeader>
            <div className="header_shape">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#000814" fillOpacity="1" d="M0,192L14.1,192C28.2,192,56,192,85,186.7C112.9,181,141,171,169,160C197.6,149,226,139,254,160C282.4,181,311,235,339,261.3C367.1,288,395,288,424,250.7C451.8,213,480,139,508,106.7C536.5,75,565,85,593,122.7C621.2,160,649,224,678,234.7C705.9,245,734,203,762,170.7C790.6,139,819,117,847,122.7C875.3,128,904,160,932,149.3C960,139,988,85,1016,90.7C1044.7,96,1073,160,1101,165.3C1129.4,171,1158,117,1186,101.3C1214.1,85,1242,107,1271,101.3C1298.8,96,1327,64,1355,69.3C1383.5,75,1412,117,1426,138.7L1440,160L1440,0L1425.9,0C1411.8,0,1384,0,1355,0C1327.1,0,1299,0,1271,0C1242.4,0,1214,0,1186,0C1157.6,0,1129,0,1101,0C1072.9,0,1045,0,1016,0C988.2,0,960,0,932,0C903.5,0,875,0,847,0C818.8,0,791,0,762,0C734.1,0,706,0,678,0C649.4,0,621,0,593,0C564.7,0,536,0,508,0C480,0,452,0,424,0C395.3,0,367,0,339,0C310.6,0,282,0,254,0C225.9,0,198,0,169,0C141.2,0,113,0,85,0C56.5,0,28,0,14,0L0,0Z"></path></svg>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light">
                
                <div className="container">
                    <div className="logo">
                        <NavLink to='/' className="navbar-brand" href="/"><img src={logo} alt="" className="w-100"/></NavLink>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                                <NavLink exact to='/'>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to='/allproduct'>all product</NavLink>
                            </li>
                            { 
                                user.email ?<li className="nav-item">
                                <NavLink exact to='/dashboard'>dashboard</NavLink>
                            </li>:''
                            }
                        </ul>
                        <div className="header_login_area">
                            { 
                                user.email ?
                                    <button onClick={logOut} className="btn_custom">log out</button> 
                                    :
                                    <div>
                                        <NavLink to='/register' className="btn_custom me-2">register</NavLink>
                                        <NavLink to='/login' className="btn_custom">log in</NavLink>
                                    </div>
                            } 
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;