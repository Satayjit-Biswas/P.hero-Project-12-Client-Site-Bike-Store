import React from 'react';

const Touch = () => {
    return (
        <div>
            <div className="container">
                <div className="touch_area">
                    <h3 className="text-center mb-2 mt-5">Get In Touch</h3>
                    <p className="text-center mb-5">Have you any problem, please contact us via message</p>
                    <div className="row text-center justify-content-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="client_area_box">
                                <i className="fas fa-map-marker-alt"></i>
                                <h4 className="my-3">Office Address</h4>
                                <p>
                                    Main Building, Centrerl Road, 72/A, New York City, USA
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="client_area_box">
                                <i className="far fa-clock"></i>
                                <h4 className="my-3">Office Opening time</h4>
                                <p>Mon - Sun: 09:00am - 05:00pm +660 198 369 360 2027
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="client_area_box">
                                <i className="far fa-envelope"></i>
                                <h4 className="my-3">Message Us</h4>
                                <p>
                                    demomail@example.com, info@example.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Touch;