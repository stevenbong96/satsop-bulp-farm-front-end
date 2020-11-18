import React, { useState, useEffect } from 'react'
import API from '../utils/API'
import QuestionInput from '../components/QuestionInput'
import AnswerTextarea from '../components/AnswerTextarea'
import SaveBtn from '../components/SaveBtn'
import CancelBtn from '../components/CancelBtn'
import NewQuestionBtn from '../components/NewQuestionBtn'
import DeleteBtn from '../components/DeleteBtn'
import UpdateBtn from '../components/UpdateBtn'
import NewQuestionModal from '../components/NewQuestionModal'
import AdminDashUpdateFields from '../components/AdminDashUpdateFields'
import AdminNav from '../components/AdminNav'

export default function FAQUpdate() {
    const [questions, setQuestions] = useState([])

    // on load, get all questions from server
    useEffect(() => {
        API.getFAQ().then(res => {
            setQuestions(res.data)
        })
    }, [])

    const handleInputChange = (event) => {
        // grab index of changed question in state
        const questionIndex = event.target.getAttribute('data-index')

        // grab property to change and new value from element
        const name = event.target.name
        const value = event.target.value

        // create new array to replace state
        const newState = [...questions]
        newState[questionIndex] = { ...questions[questionIndex], [name]: value }

        // update that question based on whether the user is changing the question or answer
        setQuestions(newState)
    }

    const showModal = (event) => {
        document.querySelector('.modal').className = "modal is-active"
    }

    const handleQuestionDelete = (event) => {
        // grab index of question to delete
        const questionIndex = event.target.getAttribute('data-index')
        const questionId = questions[questionIndex]._id

        // make request to delete question
        API.deleteFAQ(questionId).then(res => {
            // create copied array of state and splice questions to be removed
            const newQuestions = [...questions]
            newQuestions.splice(questionIndex, 1)
            // update state with new array
            setQuestions(newQuestions)
        })

    }

    const handleQuestionUpdate = (event) => {
        // grab index of question in state to update
        const questionIndex = event.target.getAttribute('data-index')
        // grab id of question to update
        const questionId = questions[questionIndex]._id
        // object to be sent to server
        const questionObj = {
            question: questions[questionIndex].question,
            answer: questions[questionIndex].answer
        }
        
        // make request to update selected question
        API.updateFAQ(questionId, questionObj)
    }

    
    const handleCancel = (event) => {
        // grab original questions/answers from server
        API.getFAQ().then(res => {
            // set states back to original and scroll to top of screen
            setQuestions(res.data)
            window.scrollTo(0, 0)
        })
    }
    
    const handleNewQuestionSubmit = (newQuestion) => {
        console.log(newQuestion)
        // send new question info to server
        API.createFAQ(newQuestion).then(res => {
            // close modal
            document.querySelector('.modal').className='modal'
        })
    }

    return (
        <>
        <AdminNav />
        <AdminDashUpdateFields>
            <div className='questions-container'>
                {questions.map((question, index) => {
                    return (
                        <div>
                            <QuestionInput text={question.question} handleInputChange={handleInputChange} index={index} />
                            <AnswerTextarea text={question.answer} handleInputChange={handleInputChange} index={index} />
                            <UpdateBtn index={index} handleQuestionUpdate={handleQuestionUpdate} />
                            <DeleteBtn index={index} handleQuestionDelete={handleQuestionDelete} />
                        </div>
                    )
                })}
            </div>
            <div>
                <NewQuestionBtn handleNewQuestion={showModal} />
                {/* <SaveBtn handleSave={handleSave}></SaveBtn> */}
                <CancelBtn handleCancel={handleCancel}></CancelBtn>
            </div>
            <NewQuestionModal handleNewQuestionSubmit={handleNewQuestionSubmit} />
        </AdminDashUpdateFields>
        </>
    )
}