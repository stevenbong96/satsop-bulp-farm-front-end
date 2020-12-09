import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OrderModal from "./OrderModal"
import API from "../../utils/User/userAPI"
import './index.css'


const useStyles = makeStyles((theme) => ({
    button: {
      display: 'block',
      marginTop: theme.spacing(2),
    },
    formControl: {
    //   margin: theme.spacing(1),
      minWidth: 120,
    },
    trackingInput: {
        maxWidth: 120
    }

  }));

function OrderList(props) {
    const classes = useStyles();
    const [trackingNumberState, setTrackingNumber] = useState()
    const [open, setOpen] = React.useState(false);
    const [shippingState, setShipingState] = useState({
        shipping: ""
    })

    const handleChange = (event) => {
        setShipingState({shipping: event.target.value});
      };

    const handleClose = () => {
        setOpen(false);
      };
    
      const handleOpen = () => {
        setOpen(true);
      };

    const showModal = (event) => {
        document.querySelector(`.modal${props.props._id}`).className = `modal is-active modal${props.props._id}`
    }

    const completeOrder = () => {
        trackingNumberState.trackingNumber !== "" ?
            API.updateOrderInfo(props.props._id,
                {
                    trackingNumber: trackingNumberState.trackingNumber,
                    shipping: shippingState.shipping,
                    completed: true
                }).then(data => {
                    //send Email to customer with tracking information 
                    var trackingStatus = {trackStatus: trackingNumberState.trackingNumber, userInfo: props.props}
                    API.sendOrderTracking(trackingStatus)
                        .then(res => {
                            // console.log(res);
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

    const shipping =[
        'USPS',
        'UPS',
        'FedEx',
        'DHL',
    ]

    function listShipping(obj) {
        return <MenuItem value={obj}>{obj}</MenuItem>  
    }

    // console.log(props)
    return (
    <li className="tile is-parent">
        <div className="tile is-child is-2">
            <button style={{background: 'none', border: 'none', padding: 0, textDecoration: 'underline', cursor: 'pointer', color: '#069'}} onClick={showModal}>
                {props.props.orderId}
            </button>
        </div>
        <div className="tile is-child is-2">
            <span>
                {props.props.updatedAt}
            </span>
        </div>
        <div className="tile is child is-2">
            <FormControl className={classes.formControl} > 
                    <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    onChange={handleChange}
                    // value={shippingState}
                    >
                      {shipping.map(listShipping)}
                    </Select>
            </FormControl>
        </div>    
        <div className="tile is-child is-2"> 
        {props.props.trackingNumber !== undefined ?
            <span>
                {props.props.trackingNumber}
            </span> 
        :
            <input className={classes.trackingInput} placeholder="Tracking Number" name="trackingNumber" onChange={handleInputChange} ></input>}      
        </div>
        <div className="tile is-child is-2">
            <span>
                ${props.props.customerTotalAmount.toFixed(2)}
            </span>
        </div>
        <div className="tile is-child is-2">
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
