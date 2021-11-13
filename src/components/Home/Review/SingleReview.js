import React from 'react';
import Rating from 'react-rating'
import './SingleReview.css'
import img from '../../../assets/logo512.png'

const SingleReview = (props) => {
    const {name,review,ReviewText} = props.Review

    return (
        <div className="col-md-4 col-sm-6">
            <div className="Review_box text-center">
                <div>
                    <div className="Review_img">
                        <img src={img} alt="" />
                    </div>
                    <div className="Review_name">
                        <h3>{name}</h3>
                    </div>
                    <div className="Review_reting">
                        {
                            <Rating
                        initialRating={ review }
                        emptySymbol="far fa-star rate-color"
                        fullSymbol="fas fa-star rate-color"
                        readonly
                    />
                        }
                    </div>
                    <div className="Review_text">
                        <p>{ReviewText}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;