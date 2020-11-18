import React from 'react'

export default function DeleteBtn(props) {
    return (
        <div className='control'>
            <button className='button is-link is-danger' data-index={props.index} onClick={props.handleQuestionDelete}>Delete</button>
        </div>
    )
}
