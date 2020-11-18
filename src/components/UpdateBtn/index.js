import React from 'react'

export default function UpdateBtn(props) {
    return (
        <div>
            <button className='button is-link is-success' data-index={props.index} onClick={props.handleQuestionUpdate}>Update</button>
        </div>
    )
}
