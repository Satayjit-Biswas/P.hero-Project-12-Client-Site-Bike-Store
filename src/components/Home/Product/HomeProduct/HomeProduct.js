import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleProduct from '../SingleProduct/SingleProduct';
import './HomeProduct.css'

const HomeProduct = () => {
    const [loading,setLoading] = useState(true);
    const [ HomeProduct , setHomeProduct]= useState([]);
    useEffect(()=>{
        fetch('https://serene-bayou-47895.herokuapp.com/product')
            .then(res => res.json())
            .then(data => {
                setHomeProduct(data.slice(-6));
                setLoading(false);
            });
            
    },[]);
    return (
        <div className="HomeProduct_area">
            <div className="container">
            <div className="text-center mb-4">
                <h4>Product</h4>
                <h3 className="mt-4">Most Popular Racing Bike</h3>
                <h3>In The World</h3>            
            </div> 
                <div className="row">
                {
                    loading?
                    <div className="d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div> 
                    :
                    HomeProduct.map((Package)=><SingleProduct key={Package._id} service={Package}></SingleProduct>)
                }
                </div>  
                <div className="text-center mt-5">
                    <Link to='allproduct' className='btn_custom'>View More</Link>
                </div>              
            </div>
        </div>
    );
};

export default HomeProduct;