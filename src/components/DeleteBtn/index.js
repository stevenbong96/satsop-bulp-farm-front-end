import React from 'react'
import './index.css'

export default function DeleteBtn(props) {
    return (
        <div>
            <button className='button is-link is-danger delete-btn' data-index={props.index} onClick={props.handleQuestionDelete}>Delete</button>
        </div>
    )
}
