import React from 'react'
import SaveBtn from '../SaveBtn'

export default function PageSectionTextarea(props) {
    return (
        <div>
            <h2>{props.heading}</h2>
            <div class="control">
                <textarea data-textId={props.id} class="textarea" placeholder="Enter your text" name={props.name} value={props.text} onChange={props.handleInputChange}></textarea>
            </div>
            <SaveBtn handleSave={props.handleSave} />
        </div>
    )
}
