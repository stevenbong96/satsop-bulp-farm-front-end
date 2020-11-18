import React from 'react'

export default function UpdateInput(props) {
    return (
        <div className='field is-horizontal'>
            <div className='field-label is-normal'>
                <label className='label'>{props.label}</label>
            </div>
            <div className='field-body'>
                <div className='field'>
                    <div className='control'>
                        <input className='input' type={props.type} value={props.text} name={props.name} onChange={props.handleInputChange} />
                    </div>
                </div>
            </div>
        </div>
    )
}
