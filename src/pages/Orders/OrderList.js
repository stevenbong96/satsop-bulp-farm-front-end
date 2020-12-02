import React from 'react'

import './index.css'

function OrderList(props) {
    console.log(props)
    return (
    <li>orderId:{props.props.orderId} customer Email: {props.props.customerEmail} ${props.props.customerTotalAmount}</li>
    )      
}

export default OrderList
