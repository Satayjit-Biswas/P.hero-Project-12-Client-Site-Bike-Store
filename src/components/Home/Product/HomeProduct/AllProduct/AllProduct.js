import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './HomeProduct.css'

const HomeProduct = () => {
    const [ allProduct , setallProduct]= useState([]);
    useEffect(()=>{
        fetch('https://serene-bayou-47895.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setallProduct(data))
    },[]);
    return (
        <div className="HomeProduct_area">
            <div className="container">
                <div className="row">
                {
                    allProduct.map((Package)=><SingleProduct key={Package._id} service={Package}></SingleProduct>)
                }
                </div>
            </div>
        </div>
    );
};

export default HomeProduct;