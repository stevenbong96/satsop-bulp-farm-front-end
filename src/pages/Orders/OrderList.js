import React from 'react'
import OrderModal from "./OrderModal"

import './index.css'

function OrderList(props) {


    const showModal = (event) => {
        document.querySelector('.modal').className = "modal is-active"
    }
    console.log(props)
    return (
    <li className="tile is-parent">
        <div className="tile is-child is-3">
            <a onClick={showModal}>
                {props.props.orderId}
            </a>
        </div>
        <div className="tile is-child is-3">
            <span>
                {props.props.updatedAt}
            </span>
        </div>    
        <div className="tile is-child is-3">       
            <input placeholder="Tracking Number"></input> 
        </div>
        <div className="tile is-child is-3">
            <span>
                ${props.props.customerTotalAmount}
            </span>
        </div>
        <div className="tile is-child is-3">
            <button>Complete Order</button>
        </div>
        <hr />
        <OrderModal props={props} />
    </li>

    )      
}

export default OrderList
