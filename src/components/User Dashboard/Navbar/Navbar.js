import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../../images/satsop_logo_color-01.png";

function Navbar() {
  const [isActive, setIsActiveState] = useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand burgerStyle">
        <a
          onClick={() => {
            setIsActiveState(!isActive);
          }}
          role="button"
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div
        id="navbarBasicExample"
        className={`navbar-menu navbarStyle has-text-centered ${
          isActive ? "is-active" : ""
        }`}
      >
        <div className="navbar-start has-text-centered">
          <a className="navbar__logo" href="/">
            <img className="navbar__logo" src={logo} alt="satsop logo"></img>
          </a>
        </div>
        <div className="navbar-end has-text-centered">
          <a className="navbar-item has-text-centered">
            <Link className="has-text-black has-text-centered" to="/">
              Home
            </Link>
          </a>

          <a className="navbar-item has-text-centered">
            <Link className="has-text-black has-text-centered" to="/products">
              Products
            </Link>
          </a>

          <a className="navbar-item has-text-centered">
            <Link className="has-text-black has-text-centered" to="/faq">
              FAQ
            </Link>
          </a>

          <a className="navbar-item has-text-centered">
            <Link className="has-text-black has-text-centered" to="/planting">
              Planting
            </Link>
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
  );
}

export default Navbar;
