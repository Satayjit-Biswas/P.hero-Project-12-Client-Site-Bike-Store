import React from 'react';

const ManageProductData = (props) => {
    const {_id,price,title,img} = props.myorder
    return (
        <div className="order">
            <img src={img} alt="img"  className="img-fluid"/>
            <div className="title my-2"> {title} </div>
            <div className="orderPrice my-2">{price} tk</div>
            
            <span onClick={() => props.manageorderDelete(_id)}><i className="far fa-trash-alt"></i></span>
        </div>
    );
};

export default ManageProductData;