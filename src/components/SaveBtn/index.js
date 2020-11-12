import React from 'react'

export default function SaveBtn(props) {
    return (
            <div className='control'>
                <button className='button is-link' onClick={props.handleSave}>Save</button>
            </div>
    )
}
