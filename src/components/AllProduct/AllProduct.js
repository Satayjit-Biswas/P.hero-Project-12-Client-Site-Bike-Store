import React, { useEffect, useState } from 'react';
import SingleProduct from '../Home/Product/SingleProduct/SingleProduct';
import PageHeader from '../Share/PageHeader/PageHeader';
import './AllProduct.css'

const AllProduct = () => {
    const [ allProduct , setallProduct]= useState([]);
    useEffect(()=>{
        fetch('https://serene-bayou-47895.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setallProduct(data))
    },[]);
    return (
        <div className="AllProduct_Area">
        <PageHeader text='All Product'></PageHeader>
            <div className="HomeProduct_area">
            <div className="container">
                <div className="row">
                {
                    allProduct.map((Package)=><SingleProduct key={Package._id} service={Package}></SingleProduct>)
                }
                </div>
            </div>
        </div>
        </div>
    );
};

export default AllProduct;