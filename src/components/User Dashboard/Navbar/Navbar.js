import React from 'react'
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
        
            <div id="navbarBasicExample" className="navbar-menu navbarStyle">
                <div className="navbar-start">
                    <a className="navbar-item">
                        <Link to="/">Home</Link>
                    </a>

                    <a className="navbar-item">
                        <Link to="/products">Products</Link>
                    </a>

                    <a className="navbar-item">
                        <Link to="/faq">FAQ</Link>
                    </a>

                    <a className="navbar-item">
                        <Link to="/login">Admin</Link>
                    </a>

                    {/* <a className="navbar-item">
                        <Link to="/productdetails">Search</Link>
                    </a> */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar