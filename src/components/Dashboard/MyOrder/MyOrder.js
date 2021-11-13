import React, { useEffect, useState } from 'react';
import './MyOrder.css';
import useAuth from '../../../hooks/useAuth';
import Myorderdata from './Myorderdata';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyOrder = () => {
    const {user}=useAuth();
    const [Myorder,setMyorder] = useState([])
    const [loading,setloading] = useState(true)

    useEffect(()=>{
        fetch(`https://serene-bayou-47895.herokuapp.com/order`)
            .then(res => res.json())
            .then(data => {
                setMyorder(data)
                setloading(false)
            })
    },[])
    const filterorders = Myorder.filter((myorder)=> myorder.email === user.email);
    // delete order 
    const manageorderDelete = id =>{
        const sure = window.confirm("Are You Sure Delete Your Order");
        if(sure){
            const url = `https://serene-bayou-47895.herokuapp.com/order/${id}`;
            fetch(url,{
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        toast.success("Delete Order");
                        const previewOrder = Myorder.filter(order => order._id !== id);
                        setMyorder(previewOrder);
                    }
                })
        }
    }
    return (
        <>
        <div className="myorder_area">
            <div className="row">
                <div className="col-12">
                    <div className="text-center my-5">
                        <h3>My Order ( { filterorders.length } )</h3>
                        {
                            loading?<div className="d-flex justify-content-center">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div> 
                        :
                            filterorders.map((myorder)=><Myorderdata key={myorder._id} myorder={myorder} manageorderDelete={manageorderDelete}></Myorderdata>)
                        }
                        
                    </div>
                </div>
            </div>
        </div>
        <ToastContainer />

        </>
    );
};

export default MyOrder;