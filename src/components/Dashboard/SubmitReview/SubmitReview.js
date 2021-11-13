import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../../../hooks/useAuth';

const SubmitReview = () => {
    const {user} = useAuth();
    const [SingleServerUser,setSingleServerUser] = useState([]);
    const {name} = SingleServerUser;

    //fetch  SingleServerUser
    useEffect(() => {
        fetch(`https://serene-bayou-47895.herokuapp.com/user/${user.email}`)
            .then(res => res.json())
            .then(data => setSingleServerUser(data))
    }, [user.email]);

    const [data,setData] = useState({
        review:'',
        ReviewText:''
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
        const store = {...data,name};
        if( data.review > 5 ){
            toast.error('Under 5 star');
        }
        else {
            fetch('https://serene-bayou-47895.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(store)
            })
            .then(res=>{
                setData({review:'',
                ReviewText:''})
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
                                <label htmlFor="exampleInputEmail1" className="form-label">Your Review Star Number</label>
                                <input onChange={InputEvent} name='review' value={data.review} required type="number" className="form-control" id="handleReview" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Your Review Text</label>
                                <textarea type="text" onChange={InputEvent} name='ReviewText' value={data.ReviewText} required className="form-control" id="handleReviewText"></textarea>
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

export default SubmitReview;