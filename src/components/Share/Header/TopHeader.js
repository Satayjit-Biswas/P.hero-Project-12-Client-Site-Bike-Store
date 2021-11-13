import React from 'react';
import './TopHeader.css'

const TopHeader = () => {
    return (
        <div className="top_nav">
            <div className="container">
                <div className="top_nav_box">
                    <div className="top_nav_left">
                        <span>
                            <i className="fas fa-mobile-alt"></i>
                            <a href="tel:+80012344567">+800 2234 45 37</a>
                        </span>
                        <span>  
                            <i className="fas fa-map-marker-alt"></i>
                            <a href="mailto:youremail@gmail.com">youremail@gmail.com</a>
                        </span>
                    </div>
                    <div className="top_nav_right">
                        <a href="/"><i className="fab fa-facebook-f"></i></a>
                        <a href="/"><i className="fab fa-twitter"></i></a>
                        <a href="/"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default TopHeader;