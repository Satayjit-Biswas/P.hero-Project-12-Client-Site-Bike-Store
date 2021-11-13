import React from 'react';

const ManageAllOrderData = (props) => {
    const {_id,status,price,title,img} = props.myorder
    return (
        <div className="order">
            <img src={img} alt="img"  className="img-fluid"/>
            <div className="title my-2"> {title} </div>
            <div className="orderPrice my-2">{price} tk</div>
            {
                status==="pending" ? <div className="Approve my-2">
                Pending
            </div> : <div className="dalibary my-2">
                Shipped
                </div>
            }
            {status === 'pending' ?  <span className="my-2" onClick={() => props.stateUpdate(_id)}>Shipped</span> :
            <span className="my-2" onClick={() => props.stateUpdate(_id)}>Cancel</span>}
            <span onClick={() => props.manageorderDelete(_id)}><i className="far fa-trash-alt"></i></span>
        </div>
    );
};

export default ManageAllOrderData;