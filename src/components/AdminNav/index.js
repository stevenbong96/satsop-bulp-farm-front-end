import React from 'react'

import './index.css'

export default function AdminNav() {
    return (
        <div className='nav-container column is-one-fifth'>
            <a className="button is-light" href='/admin/dashboard/basicinfo'>Basic Business Info</a>
            <a className="button is-light" href='/admin/dashboard/home'>Home Page</a>
            <a className="button is-light" href='/admin/dashboard/products'>Products Page</a>
            <a className="button is-light" href='/admin/dashboard/planting'>Planting Instructions Page</a>
            <a className="button is-light" href='/admin/dashboard/faq'>FAQ Page</a>
        </div>
    )
}
