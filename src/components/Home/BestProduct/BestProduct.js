import React from 'react';
import './BestProduct.css'
import b1 from '../../../assets/b1.png'
import b2 from '../../../assets/b2.png'
import b3 from '../../../assets/b3.png'

const BestProduct = () => {
    return (
        <div className="BestProduct_area">
            <div className="BestProduct_area_overly">
                <div className="container">
                    <div className="row align-items-end BestProduct_box">
                        <div className="col-md-5">
                            <div className="BestProduct_text">
                                <h4>Custom YZR700</h4>
                                <h2>CAFE RACER</h2>
                                <p>Yamaha has a rich heritage of building the most sought after supersport motorcycles designed to deliver the pinnacle of performance on and off the track. </p>
                                <a href="/" className='BestProduct_btn_custom'>All Bikes</a>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="BestProduct_img">
                                    <img src={b1} alt="" className='img-fluid'/>
                                    <img src={b2} alt="" className='img-fluid'/>
                                    <img src={b3} alt=""className='img-fluid' />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestProduct;