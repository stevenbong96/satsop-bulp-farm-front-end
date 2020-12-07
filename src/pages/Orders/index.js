import React, { useState, useEffect } from 'react'
import API from '../../utils/API'
import AdminDashUpdateFields from '../../components/AdminDashUpdateFields'
import AdminNav from '../../components/AdminNav'
import AdminHeader from '../../components/AdminHeader'
import './index.css'
import { useHistory } from 'react-router-dom'
import OrderList from "./OrderList"


export default function Orders() {
    const [pendingOrder, setPendingOrder] = useState();
    const [completedOrder, setcompletedOrder] = useState();
    const [filteredpendingOrder, setFilteredPendingOrder] = useState();
    const [filteredcompletedOrder, setFilteredcompletedOrder] = useState();
    const [orderIdState, setOrderIdState] = useState({});

    let history = useHistory();

    // on load, get all questions from server
    useEffect(() => {
        const token = localStorage.getItem("token");
        // console.log(token);
        if(!token){
            history.push("/login")
        }
        let complete = []
        let pending = []
        API.getOrders().then( res => {
            console.log(res.data)
            for(let i = 0; i < res.data.length; i++) {
                if(res.data[i].completed === true) {
                    complete.push(res.data[i])
                } else {
                    pending.push(res.data[i])
                }
            }
        }).then( data => {
            setPendingOrder(pending)
            setFilteredPendingOrder(pending)
            setcompletedOrder(complete)
            setFilteredcompletedOrder(complete)
        }
        ).catch(err => {
                console.log(err);
                history.push("/login")
                    })  
        }, [])

          // Handle Input Change
  function handleInputChange(event) {
    const { name, value } = event.target;
    
    setOrderIdState({[name] : value});
  }
  function handleSubmit(event) {
      let filterP = pendingOrder.filter(item => item.orderId === orderIdState.search)
      let filterC = completedOrder.filter(item => item.orderId === orderIdState.search)

      setFilteredPendingOrder(filterP);
      setFilteredcompletedOrder(filterC);
  }


console.log(pendingOrder)
    return (
        <>
            <AdminHeader />
            <AdminNav />
            <AdminDashUpdateFields>
            <h1 className='page-heading'>Orders</h1>
            <div className='columns'>
                <input
                        className="input is-rounded column is-10"
                        name="search"
                        type="text"
                        placeholder="OrderId"
                        onSubmit={handleSubmit}
                        onChange={handleInputChange}
                    />
                <button
                className='column is-2'
                onClick={handleSubmit}>
                    Search
                </button>
            </div>
            <hr />
            <h1>Pending Orders</h1>
                <ul>
                <li className="tile is-parent">
                    <div className="tile is-child is-3">
                        <span>
                            Order Id
                        </span>
                    </div>
                    <div className="tile is-child is-3">       
                        <span>
                            Date Ordered
                        </span>
                    </div>    
                    <div className="tile is-child is-3">       
                        <span>
                            Tracking Number
                        </span>
                    </div>
                    <div className="tile is-child is-3">
                        <span>
                            Total Order Amount
                        </span>
                    </div>
                    <div className="tile is-child is-3">
                        <span>
                            Press to complete!
                        </span>
                    </div>
                    <hr />
                </li>
                    {filteredpendingOrder !== undefined ?
                        filteredpendingOrder.map(orderP => 
                            <OrderList props={orderP} />
                        )
                    : null}
                </ul>
                <hr />
            <h1>Completed Orders</h1>
                <ul>
                <li className="tile is-parent">
                    <div className="tile is-child is-3">
                        <span>
                            Order Id
                        </span>
                    </div>
                    <div className="tile is-child is-3">       
                        <span>
                            Date Completed
                        </span>
                    </div>    
                    <div className="tile is-child is-3">       
                        <span>
                            Tracking Number
                        </span>
                    </div>
                    <div className="tile is-child is-3">
                        <span>
                            Total Order Amount
                        </span>
                    </div>
                    <div className="tile is-child is-3">
                        <span>
                            Update
                        </span>
                    </div>
                    <hr />
                </li>
                    {filteredcompletedOrder !== undefined ?
                        filteredcompletedOrder.map(orderC => 
                            <OrderList props={orderC} />
                        )
                    : null}
                </ul>
            </AdminDashUpdateFields>
        </>
    )
}