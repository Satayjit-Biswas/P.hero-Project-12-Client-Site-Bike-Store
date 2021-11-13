import React, { useEffect, useState } from 'react';
import PageHeader from '../Share/PageHeader/PageHeader';
import './Dashboard.css';
import img from '../../assets/user_logo.png';
import {
    Switch,
    useRouteMatch,
    NavLink
} from "react-router-dom";
import DashboardHome from './DashboardHome/DashboardHome';
import MyOrder from './MyOrder/MyOrder';
import Pay from './Pay/Pay';
import SubmitReview from './SubmitReview/SubmitReview';
import useAuth from '../../hooks/useAuth';
import ManageAllOrder from './ManageAllOrder/ManageAllOrder';
import AddProduct from './AddProduct/AddProduct';
import ManageProduct from './ManageProduct/ManageProduct';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const {user} = useAuth();
    const [SingleServerUser,setSingleServerUser] = useState([]);
    const {role} = SingleServerUser;


    //fetch  SingleServerUser
    useEffect(() => {
        fetch(`https://serene-bayou-47895.herokuapp.com/user/${user.email}`)
            .then(res => res.json())
            .then(data => setSingleServerUser(data))
    }, [user.email]);
    return (
        <div>
            <PageHeader text="Dashboard"></PageHeader>
            <div className="Dashboard_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="Dashboard_menu mb-5">
                                <div className="Dashboard_user">
                                    <img src={img} alt="" />
                                    <div className="name my-2">{user.displayName
                                    }</div>
                                    <div className="mb-1">Role : {role}</div>
                                </div>
                                    {role === 'member'?<div className='Dashboard_menu_box'>
                                    <NavLink to={`${url}`}>Profile</NavLink>
                                    <NavLink to={`${url}/myorder`}>My Order</NavLink>
                                    <NavLink to={`${url}/pay`}>pay</NavLink>
                                    <NavLink to={`${url}/submitreview`}>Review</NavLink></div>:<div className='Dashboard_menu_box'>
                                    <NavLink to={`${url}`}>Profile</NavLink>
                                    <NavLink to={`${url}/manageallorder`}>Manage Order</NavLink>
                                    <NavLink to={`${url}/addproduct`}>Add Product</NavLink>
                                    <NavLink to={`${url}/manageproduct`}>Manage Product</NavLink>
                                    <NavLink to={`${url}/makeadmin`}>Add Admin</NavLink></div>}
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <Switch>
                                <PrivateRoute exact path={path}>
                                    <DashboardHome></DashboardHome>
                                </PrivateRoute>
                                <PrivateRoute path={`${path}/myorder`}>
                                    <MyOrder></MyOrder>
                                </PrivateRoute>
                                <PrivateRoute path={`${path}/pay`}>
                                    <Pay></Pay>
                                </PrivateRoute>
                                <PrivateRoute path={`${path}/submitreview`}>
                                    <SubmitReview></SubmitReview>
                                </PrivateRoute>
                                <PrivateRoute path={`${path}/manageallorder`}>
                                    <ManageAllOrder></ManageAllOrder>
                                </PrivateRoute>
                                <PrivateRoute path={`${path}/addproduct`}>
                                    <AddProduct></AddProduct>
                                </PrivateRoute>
                                <PrivateRoute path={`${path}/manageproduct`}>
                                    <ManageProduct></ManageProduct>
                                </PrivateRoute>
                                <PrivateRoute path={`${path}/makeadmin`}>
                                    <MakeAdmin></MakeAdmin>
                                </PrivateRoute>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;