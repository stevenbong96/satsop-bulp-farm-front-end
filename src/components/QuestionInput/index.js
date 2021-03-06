import React from 'react'

export default function QuestionInput(props) {
    return (
        <div className='field'>
            <div className='control'>
                <input className='input' type='text' value={props.text} name='question' data-index={props.index} onChange={props.handleInputChange} placeholder='Question' />
            </div>
        </div>
    )
}
