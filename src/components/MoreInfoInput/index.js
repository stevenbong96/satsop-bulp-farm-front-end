import React from 'react'

export default function MoreInfoInput(props) {
    return (
        <div>
            <div className='control'>
                <input className='input'
                    type='text'
                    value={props.heading}
                    name='title'
                    data-place={props.place}
                    onChange={props.handleInputChange}
                    placeholder='Enter your text' />
            </div>
            <div className="control">
                <textarea 
                    data-place={props.place}
                    className="textarea"
                    placeholder="Enter a heading"
                    name='text'
                    value={props.text}
                    onChange={props.handleInputChange}></textarea>
            </div>
        </div>
    )
}
