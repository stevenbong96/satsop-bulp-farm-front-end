import React from 'react'

export default function AnswerTextarea(props) {
    return (
        <div className='field'>
            <div className='control'>
                <textarea class="textarea" placeholder="Answer" name='a' data-index={props.index} onChange={props.handleInputChange} value={props.text}></textarea>
            </div>
        </div>
    )
}
