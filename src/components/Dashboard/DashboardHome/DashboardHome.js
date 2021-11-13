import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import './DashboardHome.css'

const DashboardHome = () => {
    const [loading,setLoading] = useState(true);
    const {user} = useAuth();
    const [SingleServerUser,setSingleServerUser] = useState([]);
    const {name,email} = SingleServerUser;


    //fetch  SingleServerUser
    useEffect(() => {
        fetch(`https://serene-bayou-47895.herokuapp.com/user/${user.email}`)
            .then(res => res.json())
            .then(data => {setSingleServerUser(data)
                setLoading(false);})
    }, []);
    return (
        <div className='DashboardHome_area'>
        {
            loading?
                    <div class="d-flex justify-content-center">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div> 
                    :<div className="DashboardHome_area_text">
                <h5>Name : {name}</h5>
                <h5>Gmail : {email}</h5>
                <h5>Address : None</h5>
            </div>
        }
            
            
        </div>
    );
};

export default DashboardHome;