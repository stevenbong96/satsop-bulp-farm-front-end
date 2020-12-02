import { Category } from '@material-ui/icons'
import React,{useState, useEffect} from 'react'
import './index.css'

function OrderModal(props) {

    const [orderState, setOrderState] = useState()

    useEffect(() => {
        setOrderState(props.props.props)
    },[props])

    const handleModalClose = event => {
        document.querySelector(`.modal${orderState._id}`).className = `modal  modal${orderState._id}`
    }

    const handleInputChange = event => {
        // grab name of property to be changed and new value
        const { name, value } = event.target
    }
console.log(orderState)
    return (
        <div>
            {
                orderState !== undefined ?
            <div className={`modal modal${orderState._id}`} >
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Order: {orderState.orderId}</p>
                        <button className="delete" aria-label="close" onClick={handleModalClose} ></button>
                    </header>
                    <section className="modal-card-body">
                            <span>
                                Customers Email: {orderState.customerEmail}
                            </span>
                            <br />
                            <span>
                                Street Address: {orderState.customerAddress}
                            </span>
                            <br />
                            <span>
                                City: {orderState.customerCity}
                            </span>
                            <br />
                            <span>
                                State: {orderState.customerState}
                            </span>
                            <br />
                            <span>
                                Zip Code: {orderState.customerZipCode}
                            </span>
                            <br />
                            
                            <hr />
                            <ul>
                                {orderState.purchaseList.map(item => 
                                    <li>
                                        <span>
                                            {item.name},  
                                        </span>
                                        <span>
                                            {item.description}  
                                        </span>
                                        <span style={{float: 'right'}}>
                                            ${item.price}
                                        </span>
                                    </li>
                                )}
                            </ul>
                            <br />
                            <span>
                                Total Amount: 
                            </span>
                            <span style={{float: 'right'}}>
                                ${orderState.customerTotalAmount}
                            </span>
                            <br />
                            <hr />
                            {orderState.trackingNumber !== undefined ?
                                <span>
                                    {orderState.trackingNumber}
                                </span> 
                            :
                                <input placeholder="Tracking Number" name="trackingNumber" ></input>} 
                            <br />
                            
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-success" onClick={() => {
                            handleModalClose()
                            props.handleProductUpdate()
                        }}>Save changes</button>
                        <button className="button" onClick={handleModalClose}>Cancel</button>
                    </footer>
                </div>
            </div>
            : null
            }
        </div>
    )
}

export default OrderModal;
