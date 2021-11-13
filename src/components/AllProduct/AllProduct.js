import React, { useEffect, useState } from 'react';
import SingleProduct from '../Home/Product/SingleProduct/SingleProduct';
import PageHeader from '../Share/PageHeader/PageHeader';
import './AllProduct.css'

const AllProduct = () => {
    const [ allProduct , setallProduct]= useState([]);
    const [loading,setloading]=useState([true])
    useEffect(()=>{
        fetch('https://serene-bayou-47895.herokuapp.com/product')
            .then(res => res.json())
            .then(data => {setallProduct(data)
                setloading(false)})
    },[]);
    return (
        <div className="AllProduct_Area">
        <PageHeader text='All Product'></PageHeader>
            <div className="HomeProduct_area">
            <div className="container">
                <div className="row">
                {
                    loading?
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div> 
                    :
                    allProduct.map((Package)=><SingleProduct key={Package._id} service={Package}></SingleProduct>)
                }
                </div>
            </div>
        </div>
        </div>
    );
};

export default AllProduct;