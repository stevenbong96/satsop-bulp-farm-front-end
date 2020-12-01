import React, { useState, useEffect } from 'react'
import API from '../../utils/API'
import AdminDashUpdateFields from '../../components/AdminDashUpdateFields'
import AdminNav from '../../components/AdminNav'
import AdminHeader from '../../components/AdminHeader'
import './index.css'
import { useHistory } from 'react-router-dom'
import OrderList from "./OrderList"

export default function Orders() {
    const [pendingOrder, setPendingOrder] = useState()
    const [completedOrder, setcompletedOrder] = useState()

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
            setcompletedOrder(complete)
        }
        ).catch(err => {
                console.log(err);
                history.push("/login")
                    })  
        }, [])

    // const handleInputChange = (event) => {
    //     // grab index of changed question in state
    //     const questionIndex = event.target.getAttribute('data-index')

    //     // grab property to change and new value from element
    //     const name = event.target.name
    //     const value = event.target.value

    // }

    const showModal = (event) => {
        document.querySelector('.modal').className = "modal is-active"
    }

console.log(pendingOrder)
    return (
        <>
            <AdminHeader />
            <AdminNav />
            <AdminDashUpdateFields>
            <h1 className='page-heading'>Orders</h1>
            <hr />
            <h1>Pending Orders</h1>
                <ul>
                    {pendingOrder.map(order => {
                        <OrderList props={order} />
                    })}
                </ul>
                <hr />
            <h1>Completed Orders</h1>
                <ul>
                    {completedOrder.map(order => {
                        <OrderList props={order} />
                })}
                </ul>
            </AdminDashUpdateFields>
        </>
    )
}