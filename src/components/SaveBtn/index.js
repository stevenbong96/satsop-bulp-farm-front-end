import React from 'react'
import './index.css'

export default function SaveBtn(props) {
    return (
            <div className='control'>
                <button className='button is-link save-btn' onClick={props.handleSave}>Save</button>
            </div>
    )
}
