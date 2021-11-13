import React, { useEffect, useState } from 'react';
import './Review.css'
import SingleReview from './SingleReview';



const Review = () => {
    const [ review , setreview]= useState([]);
    const [ loading , setloading]= useState(true);
    useEffect(()=>{
        fetch('https://serene-bayou-47895.herokuapp.com/review')
            .then(res => res.json())
            .then(data => {setreview(data)
                setloading(false)})
    },[]);
    return (
        <div className='Review_area'>
            <div className="container">
                <div className="row">
                    <div className="row">
                        {
                            loading?<div className="d-flex justify-content-center">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div> 
                        :
                            review.map((Review)=><SingleReview key={Review._id} Review={Review}></SingleReview>)
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;