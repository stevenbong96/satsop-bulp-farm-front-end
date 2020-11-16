import React, { useState, useEffect } from 'react'
import API from '../utils/API'
import QuestionInput from '../components/QuestionInput'
import AnswerTextarea from '../components/AnswerTextarea'
import SaveBtn from '../components/SaveBtn'
import CancelBtn from '../components/CancelBtn'
import NewQuestionBtn from '../components/NewQuestionBtn'
import DeleteBtn from '../components/DeleteBtn'

export default function FAQUpdate() {
    const [questions, setQuestions] = useState([
        {
            id: '3049tukjdf',
            q: 'This is my first question?',
            a: 'This is my first answer'
        },
        {
            id: 'as;dlkfj;eoijf',
            q: 'This is my second question',
            a: "This is my second answer"
        },
        {
            id: 'a;sdlfjiie',
            q: "This is my third question",
            a: "This is my third answer"
        }
    ])

    const [questionsToDelete, setQuestionsToDelete] = useState([])

    // on load, get all questions from server
    useEffect(() => {
        // API.getFAQ().then(res => {
        //     setQuestions(res)
        // })
    })

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

    const handleNewQuestion = (event) => {
        setQuestions([
            ...questions,
            {
                q: '',
                a: ''
            }
        ])
    }

    const handleQuestionDelete = (event) => {
        // grab index of question to delete
        const questionIndex = event.target.getAttribute('data-index')
        const questionId = questions[questionIndex].id

        // create copied array of state and splice questions to be removed
        const newQuestions = [...questions]
        newQuestions.splice(questionIndex, 1)
        // update state with new array
        setQuestions(newQuestions)

        // add id of deleted quetsions to array of deleted questions
        setQuestionsToDelete([...questionsToDelete, questionId])
    }

    const handleSave = (event) => {
        // make request to update questions in db
        // API.updateFAQ(questions).then(function(res) {
            // if user has deleted any questions, make request to have them removed from db
            // if (questionsToDelete.length >= 1) {
                // API.deleteFAQ(questionsToDelete).then(function(res) {

        //         })
        //     }
        // })
    }

    const handleCancel = (event) => {
        // grab original questions/answers from server
        // API.getFAQ().then(res => {
            // set states back to original
        //     setQuestions(res)
        // })
        setQuestionsToDelete([])
    }

    return (
        <div>
            <div className='questions-container'>
                {questions.map((question, index) => {
                    return (
                        <>
                            <QuestionInput text={question.q} handleInputChange={handleInputChange} index={index} />
                            <AnswerTextarea text={question.a} handleInputChange={handleInputChange} index={index} />
                            <DeleteBtn index={index} handleQuestionDelete={handleQuestionDelete} />
                        </>
                    )
                })}
            </div>
            <div>
                <NewQuestionBtn handleNewQuestion={handleNewQuestion} />
                <SaveBtn handleSave={handleSave}></SaveBtn>
                <CancelBtn handleCancel={handleCancel}></CancelBtn>
            </div>
        </div>
    )
}