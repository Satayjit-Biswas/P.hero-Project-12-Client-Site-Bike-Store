import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            <div className="container">
            <h3 className="text-center mb-4">Contact Us</h3>
                <div className="contact_form">
                    <form>
                        <div className="row">
                            <div className="col">
                                <input type="text" required className="form-control" placeholder="First name" aria-label="First name" />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                            </div>
                        </div>
                        <div className="row g-3 my-3">
                            <div className="mb-3">
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="your@gmail.com" />
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn_custom">Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;