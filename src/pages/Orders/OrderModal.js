import { Category } from '@material-ui/icons'
import React,{useState, useEffect} from 'react'
import './index.css'

function OrderModal(props) {

    const [orderState, setOrderState] = useState()

    useEffect(() => {
        setOrderState(props.props.props)
    },[props])

    const handleModalClose = event => {
        document.querySelector('.modal').className = 'modal'
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
            <div className="modal">
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Order: {orderState.orderId}</p>
                        <button className="delete" aria-label="close" onClick={handleModalClose} ></button>
                    </header>
                    <section className="modal-card-body">
                            <span>
                                {props.props.props.orderId}
                            </span>
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
