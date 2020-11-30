import React, { useState, useEffect } from 'react'
import API from '../../utils/API'
import QuestionInput from '../../components/QuestionInput'
import AnswerTextarea from '../../components/AnswerTextarea'
import SaveBtn from '../../components/SaveBtn'
import CancelBtn from '../../components/CancelBtn'
import NewQuestionBtn from '../../components/NewQuestionBtn'
import DeleteBtn from '../../components/DeleteBtn'
import UpdateBtn from '../../components/UpdateBtn'
import NewQuestionModal from '../../components/NewQuestionModal'
import AdminDashUpdateFields from '../../components/AdminDashUpdateFields'
import AdminNav from '../../components/AdminNav'
import AdminHeader from '../../components/AdminHeader'
import './index.css'
import { useHistory } from 'react-router-dom'

export default function Orders() {
    const [pendingOrder, setPendingOrder] = useState([])
    const [completedOrder, setcompletedOrder] = useState([])

    let history = useHistory();

    // on load, get all questions from server
    useEffect(() => {
        const token = localStorage.getItem("token");
        // console.log(token);
        if(!token){
            history.push("/login")
        }
        API.getOrders().then(res => {
            res.data.map(order => order.completed !== false ? 
                setcompletedOrder([...completedOrder, order])
                : 
                setPendingOrder([...pendingOrder, order]))
        }).catch(err => {
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


    return (
        <>
            <AdminHeader />
            <AdminNav />
            <AdminDashUpdateFields>
            <h1 className='page-heading'>Orders</h1>
            <hr />
                <div className='questions-container'>
                    {pendingOrder.map(pending =>
                    <h1>{pending.orderId}</h1>)}
                </div>
                <div className='questions-container'>
                    {completedOrder.map(completed =>
                    <h1>{completed.orderId}</h1>)}
                </div>
            </AdminDashUpdateFields>
        </>
    )
}