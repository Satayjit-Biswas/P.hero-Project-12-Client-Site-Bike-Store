import React from 'react';
import './Error.css'
import PageHeader from '../Share/PageHeader/PageHeader';

const Error = () => {
    return (
        <div className="error">
            <PageHeader text="Sorry"></PageHeader> 
            <div className="container text-center">
                <h2>This Page Not Found</h2>
            </div>
        </div>
    );
};

export default Error;