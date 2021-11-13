import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const AddProduct = () => {
    const [data,setData] = useState({
        title:'',
        img:'',
        engine:'',
        weight:'',
        power:'',
        price:'',
        ratingman:'',
        rating:'',
        description:''
    });
    //handle input
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
    const submitReview = (e) => {
        e.preventDefault()
        if( data.rating > 5 ){
            toast.error('Under 5 star');
            return;
        }
        else{
            fetch('https://serene-bayou-47895.herokuapp.com/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
            })
            .then(res=>{
                setData({
                title:'',
                img:'',
                engine:'',
                weight:'',
                power:'',
                price:'',
                ratingman:'',
                rating:'',
                description:''
            })
                toast.success('Add review');
            })
            
        }
        
    }
    return (
        <div>
            <div className="register_area">
                <div className="register_form">
                        <form onSubmit={submitReview}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Product title</label>
                                <input onChange={InputEvent} name='title' value={data.title} required type="text" className="form-control" id="handleReview" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Product Img Link</label>
                                <input onChange={InputEvent} name='img' value={data.img} required type="text" className="form-control" id="handleReview" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Product engine</label>
                                <input onChange={InputEvent} name='engine' value={data.engine} required type="text" className="form-control" id="handleReview" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Product weight</label>
                                <input onChange={InputEvent} name='weight' value={data.weight} required type="text" className="form-control" id="handleReview" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Product power</label>
                                <input onChange={InputEvent} name='power' value={data.power} required type="text" className="form-control" id="handleReview" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Product price</label>
                                <input onChange={InputEvent} name='price' value={data.price} required type="text" className="form-control" id="handleReview" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Product ratingman</label>
                                <input onChange={InputEvent} name='ratingman' value={data.ratingman} required type="text" className="form-control" id="handleReview" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Product Rating</label>
                                <input onChange={InputEvent} name='rating' value={data.rating} required type="number" className="form-control" id="handleReview" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Product description</label>
                                <textarea type="text" onChange={InputEvent} name='description' value={data.description} required className="form-control" id="handleReviewText"></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn_custom">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
                <ToastContainer />
        </div>
    );
};

export default AddProduct;