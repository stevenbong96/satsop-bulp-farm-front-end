import React, { useState, useEffect } from "react";
// import MapView from "./mapView";
import "./storeInfo.css";
// import 'leaflet/dist/leaflet.css';
// import {Link} from "react-router-dom";
import API from "../../../utils/User/userAPI";
import MapView from "../Direction/mapView";

function StoreInfo(props) {
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

  // {currentStoreInfo.map(storeObj => {
  //     console.log(storeObj)
  //     return <phoneNumber={storeObj.phoneNumber} email={storeObj.companyEmail} hours={storeObj.hours}/>
  // })}

  return (
    <div className="storeInfo__container">
      <h2 className="section__title">STORE INFO</h2>
      <hr></hr>
      <h6 className="subtitle is-6">{props.storeText}</h6>

      <div className="columns is-justify-content-center storeText">
        <div className="column is-4 has-text-left">
          <div className="storeInfo__card">
            <h6 className="subtitle">
              Phone Number:{" "}
              <a
                href={`tel:${currentStoreInfo.map(
                  (phoneObj) => phoneObj.phoneNumber
                )}`}
              >
                {currentStoreInfo.map((phoneObj) => phoneObj.phoneNumber)}
              </a>
            </h6>
            <h6 className="subtitle">
              Email:{" "}
              <a
                href={`mailto:${currentStoreInfo.map(
                  (emailObj) => emailObj.companyEmail
                )}`}
              >
                {currentStoreInfo.map((emailObj) => emailObj.companyEmail)}
              </a>
            </h6>
            <h6 className="subtitle ">Store Hours: Monday-Friday 10AM - 5PM</h6>
            <h6 class="subtitle ">
              Address: 980 Monte Elma Rd. <br /> Elma, WA 98541
            </h6>
            <form
              class="directions-form"
              action="https://www.google.com/maps/place/Satsop+Bulb+Farm/@47.0047691,-123.4744082,16.5z/data=!4m13!1m7!3m6!1s0x5492290aa727fdf9:0xf881983b2eecb0ec!2sSatsop,+WA+98541!3b1!8m2!3d47.0031512!4d-123.4834945!3m4!1s0x0:0xed9ea646b607879a!8m2!3d47.0038552!4d-123.4734468"
              method="get"
              target="_blank"
            >
              <button className="storeInfo__button">Get Directions</button>
            </form>
          </div>
        </div>
        <div className="column is-8">
          <MapView></MapView>
        </div>
      </div>
    </div>
  );
}

export default StoreInfo;
