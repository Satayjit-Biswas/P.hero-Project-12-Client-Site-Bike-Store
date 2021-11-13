import React from 'react';
import './Slider.css'
import img from '../../../assets/header_bg.png'

const Slider = () => {
    return (
        <div className="slider_area">
                <div className="header_img">
                    <img src={img} alt="img" className="img-fluid"/>
                </div>
                <div className="container">
                    <div className="slider_box">
                        <div className="row">
                            <div className="col-md-6">
                            </div>
                            <div className="col-md-6">
                                <div className="slider_area_text text-center">
                                    <h2>Welcome to our</h2>
                                    <h2>Bike Shop</h2>
                                    <p className="w-100">The Motorbike Shop showcase a large selection of the latest new Yamaha models, plus an extensive choice of top quality used motorcycles. </p>
                                    <div className="buttn">
                                        <a href='/' className="btn_custom">Buy Now</a>
                                    </div>
                                    
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
        </div>
    );
};

export default Slider;