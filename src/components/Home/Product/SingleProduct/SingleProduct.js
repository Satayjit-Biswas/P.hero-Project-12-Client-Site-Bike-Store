import React from 'react';
import { useHistory } from 'react-router';
import Rating from 'react-rating'
import './SingleProduct.css';


const SingleProduct = (props) => {
    const {_id,title,img,engine,weight,power,price,ratingman,rating,description} = props.service;
    const history = useHistory();
    const HandleProduct =()=>{
        history.push(`/productdetails/${_id}`);
    }
    return (
        <div className="col-lg-4 col-md-6">
            <div className="SingleProduct">
                <div className="SingleProduct_img">
                    <img src={img} alt="p1"/>
                    <div className="SingleProduct_price">
                        <span>{price} Tk</span>
                    </div>
                </div>
                <div className="SingleProduct_text">
                    <h5><a href="#">{title}</a></h5>
                    <div className="config">
                        <p><span>Engine :</span> {engine}cc</p>
                        <p><span>Weight :</span> {weight}kg</p>
                        <p><span>Max-Power :</span> {power}bhp</p>
                    </div>
                    <div className="SingleProduct_riview">
                        <div className="SingleProduct_riview_man me-2">
                            <i className="far fa-user me-2"></i>
                            ({ratingman})
                        </div>
                        {
                            <Rating
                                    initialRating={ rating }
                                    emptySymbol="far fa-star rate-color"
                                    fullSymbol="fas fa-star rate-color"
                                    readonly
                                />
                        }
                    </div>
                    <p>{description.substring(0,100)} . . .</p>
                    <div className="text-center">
                            <button onClick={HandleProduct} className="btn_custom">
                                Buy Now
                            </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;