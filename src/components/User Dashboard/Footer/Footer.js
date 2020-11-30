import React, { useState, useEffect } from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import API from "../../../utils/User/userAPI";
import logo from "../../../images/satsop_logo_color-01.png";

function Footer() {
  const [currentStoreInfo, setCurrentStoreInfo] = useState([]);

  useEffect(() => {
    loadStoreInfo();
  }, []);

  function loadStoreInfo() {
    API.getStoreInfo()
      .then((res) => {
        // console.log(res.data);
        setCurrentStoreInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <footer className="footer footerStyle">
      <div className="container">
        <img className="footer__logo" src={logo} alt="satsop logo"></img>
        <div className="columns">
          {/* LEFT FOOTER COLUMN */}
          <div class="column is-4">
            <h3>Contact Us</h3>
            {/* PHONE */}
            <p className="">
              <a
                href={`tel:${currentStoreInfo.map(
                  (phoneObj) => phoneObj.phoneNumber
                )}`}
              >
                <i class="fa fa-phone"></i>
                &nbsp;
                {currentStoreInfo.map((phoneObj) => phoneObj.phoneNumber)}
              </a>
            </p>

            {/* EMAIL */}
            <p className="">
              <a
                href={`mailto:${currentStoreInfo.map(
                  (emailObj) => emailObj.companyEmail
                )}`}
              >
                <i class="fas fa-envelope"></i>
                &nbsp;
                {currentStoreInfo.map((emailObj) => emailObj.companyEmail)}
              </a>
            </p>

            {/* ADDRESS */}
            <p class=" ">
              <a
                href={`https://www.google.com/maps/place/Satsop+Bulb+Farm/@47.0047691,-123.4744082,16.5z/data=!4m13!1m7!3m6!1s0x5492290aa727fdf9:0xf881983b2eecb0ec!2sSatsop,+WA+98541!3b1!8m2!3d47.0031512!4d-123.4834945!3m4!1s0x0:0xed9ea646b607879a!8m2!3d47.0038552!4d-123.4734468`}
                target="_blank"
              >
                <i class="fas fa-map-marker-alt"></i>
                &nbsp; 980 Monte Elma Rd. <br />
                &nbsp;&nbsp;&nbsp;&nbsp; Elma, WA 98541
              </a>
            </p>

            {/* FACEBOOK */}
            <p>
              <a
                href="https://www.facebook.com/Satsop-Bulb-Farm-287080364304/"
                target="_blank"
              >
                <ion-icon name="logo-facebook"></ion-icon>
                &nbsp; Satsop Bulb Farms
              </a>
            </p>
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
