import React, { useEffect, useState } from 'react';
import PageHeader from '../../../Share/PageHeader/PageHeader';
import './ProductDetails.css'
import { useParams } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../../../../hooks/useAuth';

const ProductDetails = () => {
    const{user}= useAuth();
    console.log(user)
    const [GetProduct,setGetProduct] =useState({});
    const {id} = useParams();
    useEffect(() => {
        fetch(`https://serene-bayou-47895.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => setGetProduct(data))
    },[id])
    const {_id,title,img,engine,weight,power,price,description} = GetProduct;
    // add order 
    const [order,setData] = useState({
        phone:'',
        address:'',
    });
    //handle order input
    const InputEvent = (event) => {
        const{name,value} = event.target;
        setData((prev)=>{
            return {
                ...prev,
                [name] : value,
            }
        });
    }
    // submit Review
    const submitOrder = (e) => {
        const addorder = {...order,orderproductid:_id,name:user.displayName,email:user.email, status:'pending',title:title,img:img,price:price};
        e.preventDefault()
            fetch('https://serene-bayou-47895.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addorder)
            })
            .then(res=>{
                setData({phone:'',
                address:''})
                toast.success('Add Order');
            })
            
    }
    return (
        <div>
            <PageHeader text="Product Details"></PageHeader>
            <div className="ProductDetails_area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="ProductDetails_box">
                                <img src={img} alt="" className="img-fluid w-100"/>
                                <div className="ProductDetails_box_text">
                                    <h2>{title} Specifications :</h2>
                                    <div className="ProductDetails_Specifications">
                                            <p><span>Engine :</span> {engine}cc</p>
                                            <p><span>Weight :</span> {weight}kg</p>
                                            <p><span>Max-Power :</span> {power}bhp</p>
                                    </div>
                                    <p className="ProductDetails_description">
                                    {description} 
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="Order_now_box">
                            <h4>Order Now</h4>
                            <h5 className="mb-3"> {price} tk Only</h5>
                            <form onSubmit={submitOrder}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">User Name</label>
                                    <input onChange={InputEvent} readOnly value={user.displayName} required type="text" className="form-control" id="handleReview" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">User Email </label>
                                    <input onChange={InputEvent} readOnly value={user.email} required type="text" className="form-control" id="handleReview" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Phone Number</label>
                                    <input onChange={InputEvent} name='phone' value={order.phone} required type="number" className="form-control" id="handleReview" aria-describedby="emailHelp" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
                                    <textarea type="text" onChange={InputEvent} name='address' value={order.address} required className="form-control" id="handleReviewText"></textarea>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn_custom">Order</button>
                                </div>
                            </form>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ProductDetails;