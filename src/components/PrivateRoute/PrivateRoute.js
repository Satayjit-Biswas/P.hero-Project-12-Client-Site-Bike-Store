import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({children,...rest}) => {
    const {user,dataComing} = useAuth();
    if(dataComing){
        return <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    </div> 
    }
    return (
        <Route
            {...rest}
            render={({location})=> user.email ? children :
                <Redirect to = {{pathname:"/login",
                    state:{from:location}
                    }}
                ></Redirect>
                }
            >
        </Route>
    );
};

export default PrivateRoute;