import React from 'react'

export default function NewQuestionBtn(props) {
    return (
        <div className='control'>
            <button className='button is-primary' onClick={props.handleNewQuestion}>New Question</button>
        </div>
    )
}
