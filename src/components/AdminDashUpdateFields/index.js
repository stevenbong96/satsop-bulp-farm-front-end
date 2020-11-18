import React from 'react'
import './index.css'

export default function AdminDashUpdateFields(props) {
    return (
        <div className="input-fields-container">
            {props.children}
        </div>
    )
}
