import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ManageProductData from './ManageProductData';

const ManageProduct = () => {
    const [Allproduct,setAllproduct] = useState([]);
    const [loading,setloading] = useState(true);

    useEffect(()=>{
        fetch(`https://serene-bayou-47895.herokuapp.com/product`)
            .then(res => res.json())
            .then(data => {
                setAllproduct(data)
                setloading(false)
            })
    },[])
    // delete order 
    const manageorderDelete = id =>{
        const sure = window.confirm("Are You Sure Delete Your Order");
        if(sure){
            const url = `https://serene-bayou-47895.herokuapp.com/product/${id}`;
            fetch(url,{
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        toast.success("Delete product");
                        const previewOrder = Allproduct.filter(order => order._id !== id);
                        setAllproduct(previewOrder);
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
                        <h3>All Product ( { Allproduct.length } )</h3>
                        {
                            loading?<div className="d-flex justify-content-center">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div> 
                        :
                            Allproduct.map((myorder)=><ManageProductData key={myorder._id} myorder={myorder} manageorderDelete={manageorderDelete}></ManageProductData>)
                        }
                        
                    </div>
                </div>
            </div>
        </div>
        <ToastContainer />

        </>
    );
};

export default ManageProduct;