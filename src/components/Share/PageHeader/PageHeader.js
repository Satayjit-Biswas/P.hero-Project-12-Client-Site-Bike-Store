import React from 'react';
import './PageHeader.css'

const PageHeader = (props) => {
    return (
        <div className="PageHeader">
            <h2>{props.text}</h2>
        </div>
    );
};

export default PageHeader;