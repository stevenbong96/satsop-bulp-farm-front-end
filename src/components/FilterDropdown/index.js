import React from 'react'
import './index.css'

export default function FilterDropdown(props) {
    return (
        <div className='select filter-dropdown' >
            <select data-filterType={props.filterType} onChange={props.handleFilterChange}>
                <option hidden disabled selected>{props.label}</option>
                {props.options.map(option => {
                    return <option value={option}>{option}</option>
                })}
            </select>
        </div>
    )
}
