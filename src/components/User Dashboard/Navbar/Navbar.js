import React from 'react'
import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true">Home</span>
                    <span aria-hidden="true">Products</span>
                    <span aria-hidden="true">FAQ</span>
                </a>
            </div>
        
            <div id="navbarBasicExample" className="navbar-menu navbarStyle has-text-centered">
                <div className="navbar-start has-text-centered">
                    <a className="navbar-item has-text-centered">
                        <Link className="has-text-black has-text-centered" to="/">Home</Link>
                    </a>

                    <a className="navbar-item has-text-centered">
                        <Link className="has-text-black has-text-centered" to="/products">Products</Link>
                    </a>

                    <a className="navbar-item has-text-centered">
                        <Link className="has-text-black has-text-centered" to="/faq">FAQ</Link>
                    </a>

                    <a className="navbar-item has-text-centered">
                        <Link className="has-text-black has-text-centered" to="/planting">Planting</Link>
                    </a>

                    {/* <a className="navbar-item">
                        <Link to="/login">Admin</Link>
                    </a> */}

                    {/* <a className="navbar-item">
                        <Link to="/productdetails">Search</Link>
                    </a> */}
                </div>
            </div>
        </nav>
    )
}

export default Navbar