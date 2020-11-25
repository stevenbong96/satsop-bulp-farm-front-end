import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer footerStyle">
      <div className="container">
        <div className="columns">
          {/* LEFT FOOTER COLUMN */}
          <div class="column is-4">
            <h4>Satsop Bulb Farm</h4>
            <p>Address</p>
            <p>Address</p>
            <p>Address</p>
            <p>Connect With Us On Facebook</p>
            <a
              href="https://www.facebook.com/Satsop-Bulb-Farm-287080364304/"
              target="_blank"
            >
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </div>

          {/* MIDDLE FOOTER COLUMN */}
          <div class="column is-4"></div>

          {/* RIGHT FOOTER COLUMN */}
          <div class="column is-4">
            <h5>Site Links</h5>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/faq">Frequently Asked Questions</Link>
              </li>
              <li>
                <Link to="/planting">Planting Instructions</Link>
              </li>
              <li>
                <Link to="/login">Admin Login</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT ROW */}
        <div className="columns">
          <div class="column has-text-centered">
            <p>&copy; 2020 Satsop Bulb Farm</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
