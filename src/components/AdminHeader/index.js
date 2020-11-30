import React from 'react'
import './index.css'

export default function AdminHeader() {
    const adminLogout = () => {
        localStorage.removeItem('token')
        window.location.href='/'
    }
    
    return (
        <div className="adminHeader columns">
            <h1 className="header admin-header-text">Admin Dashboard</h1>
            <button className='logout-btn' onClick={adminLogout}>Logout</button>
        </div>
    )
}
