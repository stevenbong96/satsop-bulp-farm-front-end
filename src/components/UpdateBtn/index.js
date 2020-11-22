import React from 'react'
import './index.css'

export default function UpdateBtn(props) {
    return (
        <div>
            <button className='button is-link update-btn' data-index={props.index} onClick={props.handleQuestionUpdate}>Update</button>
        </div>
    )
}
