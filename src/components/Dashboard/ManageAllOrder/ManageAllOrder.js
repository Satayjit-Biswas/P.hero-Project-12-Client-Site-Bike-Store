import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../../../hooks/useAuth';
import ManageAllOrderData from './ManageAllOrderData';

const ManageAllOrder = () => {
const {user}=useAuth();
const [order,setorder] = useState([])
const [loading,setloading] = useState(true)

useEffect(()=>{
    fetch(`http://localhost:5000/order`)
        .then(res => res.json())
        .then(data => {
            setorder(data)
            setloading(false)
        })
},[order])
// delete order 
const manageorderDelete = id =>{
    const sure = window.confirm("Are You Sure Delete Your Order");
    if(sure){
        const url = `http://localhost:5000/order/${id}`;
        fetch(url,{
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    toast.success("Delete Order");
                    const previewOrder = order.filter(order => order._id !== id);
                    setorder(previewOrder);
                }
            })
    }
}
// Update State 
const stateUpdate =(id)=>{
    const changeState = order.find(order=>order._id === id);
    const {status}=changeState;

    if(status == 'pending'){
        const url = `http://localhost:5000/order/${id}`;
        fetch(url,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status : "shipped" })
        })
        .then(res=> res.json())
        .then(data=>{
            toast.success("shipped Order")
        })
        .catch(err=>{
            console.log(err)
        })
    }
    else{
        const url = `http://localhost:5000/order/${id}`;
        fetch(url,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status : "pending" })
        })
        .then(res=> res.json())
        .then(data=>{
            toast.warn("Pending Order")
        })
        .catch(err=>{
            console.log(err)
        })
    }
}
return (
    <>
    <div className="myorder_area">
        <div className="row">
            <div className="col-12">
                <div className="text-center my-5">
                    <h3>All Orders ( { order.length } )</h3>
                    {
                        loading?<div class="d-flex justify-content-center">
                            <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div> 
                        :
                        order.map((myorder)=><ManageAllOrderData key={myorder._id} myorder={myorder} manageorderDelete={manageorderDelete} stateUpdate={stateUpdate}></ManageAllOrderData>)
                    }
                    
                </div>
            </div>
        </div>
    </div>
    <ToastContainer />

    </>
);
};

export default ManageAllOrder;