import React, { useState } from 'react'
import OrderModal from "./OrderModal"
import API from "../../utils/User/userAPI"

import './index.css'

function OrderList(props) {
    const [trackingNumberState, setTrackingNumber] = useState()


    const showModal = (event) => {
        document.querySelector(`.modal${props.props._id}`).className = `modal is-active modal${props.props._id}`
    }

    const completeOrder = () => {
        trackingNumberState.trackingNumber !== "" ?
            API.updateOrderInfo(props.props._id,
                {
                    trackingNumber: trackingNumberState.trackingNumber,
                    completed: true
                }).then(data => {
                    //send Email to customer with tracking information 
                    var trackingStatus = {trackStatus: trackingNumberState.trackingNumber, userInfo: props.props}
                    API.sendOrderTracking(trackingStatus)
                        .then(res => {
                            console.log(res);
                            if (res.data.status === "success") {
                                alert("Message Sent!!!!!");
                            } else if (res.data.status === "fail") {
                                alert("Message failed to send.");
                            }
                        }).catch(err => {
                            console.log(err);
                        })
                })
                .then(data => {
                    // console.log("HELLO this is after .then")
                    window.location.reload()
                })
            :
            alert("Please Enter Tracking Information")
    }

    const handleInputChange = event => {
        // grab name of property to be changed and new value
        const name = event.target.name
        const value = event.target.value

        setTrackingNumber({ [name]: value })
    }


    // console.log(props)
    return (
        <li className="tile is-parent">
            <div className="tile is-child is-3">
                <button style={{ background: 'none', border: 'none', padding: 0, textDecoration: 'underline', cursor: 'pointer', color: '#069' }} onClick={showModal}>
                    {props.props.orderId}
                </button>
            </div>
            <div className="tile is-child is-3">
                <span>
                    {props.props.updatedAt}
                </span>
            </div>
            <div className="tile is-child is-3">
                {props.props.trackingNumber !== undefined ?
                    <span>
                        {props.props.trackingNumber}
                    </span>
                    :
                    <input placeholder="Tracking Number" name="trackingNumber" onChange={handleInputChange} ></input>}
            </div>
            <div className="tile is-child is-3">
                <span>
                    ${props.props.customerTotalAmount}
                </span>
            </div>
            <div className="tile is-child is-3">
                {props.props.completed !== false ?
                    <button>Update Order</button>
                    :
                    <button onClick={completeOrder}>Complete Order</button>}
            </div>
            <hr />
            <OrderModal props={props} />
        </li>

    )
}

export default OrderList
