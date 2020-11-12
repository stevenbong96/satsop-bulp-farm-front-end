import React from 'react'

export default function CancelBtn(props) {
    return (
        <div className='control'>
            <button className='button is-danger' onClick={props.handleCancel}>Cancel</button>
        </div>
    )
}
