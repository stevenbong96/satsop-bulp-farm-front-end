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

export default function FAQUpdate() {
    const [questions, setQuestions] = useState([])

    const [questionsToDelete, setQuestionsToDelete] = useState([])

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
    
            // add id of deleted quetsions to array of deleted questions
            setQuestionsToDelete([...questionsToDelete, questionId])
        })

    }

    const handleQuestionUpdate = (event) => {
        // make request to update questions in db
        API.updateFAQ(questions).then(function (res) {
            // if user has deleted any questions, make request to have them removed from db
            if (questionsToDelete.length >= 1) {
                API.deleteFAQ(questionsToDelete).then(function (res) {

                })
            } else {

            }
        })
    }

    
    const handleCancel = (event) => {
        // grab original questions/answers from server
        API.getFAQ().then(res => {
            // set states back to original and scroll to top of screen
            setQuestions(res.data)
            window.scrollTo(0, 0)
        })
        // reset array of questions to delete to empty array
        setQuestionsToDelete([])
    }
    
    const handleNewQuestionSubmit = (newQuestion) => {
        // send new question info to server
        API.createFAQ(newQuestion).then(res => {
            // close modal
            document.querySelector('.modal').className='modal'
        })
    }

    return (
        <div>
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
        </div>
    )
}