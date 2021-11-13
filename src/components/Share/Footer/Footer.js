import React from 'react';
import './Footer.css';
import map from '../../../assets/footer-img-5.png'


const Footer = () => {
return (
<div className="footer_area">
    <div className="container">
        <div className="pt-4">
            <div className="row">
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="footer_service">
                        <h4>Contact Us</h4>
                        <p>
                        If you are looking for the smoothest way to reach the top speed & cruise in front of your competitors,  
                        </p>
                        <img src={map} alt="" className="img-fluid" />
                    </div>

                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="footer_service">
                        <h4>Important Links</h4>
                        <p><a href="/">Our Story</a></p>
                        <p><a href="/">Inventory</a></p>
                        <p><a href="/">Cash Offer</a></p>
                        <p><a href="/">Opening ours</a></p>
                        <p><a href="/">Recommendations</a></p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="footer_service">
                        <h4>Quick Links</h4>
                        <p><a href="/">Term</a></p>
                        <p><a href="/">Privacy & Policy</a></p>
                        <p><a href="/">Blog</a></p>
                        <p><a href="/">Media</a></p>
                        <p><a href="/">About Us</a></p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="footer_service">
                        <h4>Support</h4>
                        <p><a href="/">Customer Support</a></p>
                        <p><a href="/">Privacy & Policy</a></p>
                        <p><a href="/">Terms & Condition</a></p>
                        <p><a href="/">Shipping Policy</a></p>
                        <p><a href="/">Return Policy</a></p>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div className="buttom_footer">
        <p>© Bike-Store <span>2021</span> | All Rights Reserved</p>
        <div className="footer_icon">
            <a href="/"><i className="fab fa-facebook-f"></i></a>
            <a href="/"><i className="fab fa-twitter"></i></a>
            <a href="/"><i className="fab fa-instagram"></i></a>
            <a href="/"><i className="fab fa-youtube"></i></a>
        </div>
    </div>
</div>
);
};

export default Footer;