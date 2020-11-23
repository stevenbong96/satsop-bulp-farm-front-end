import React from "react";
// import MapView from "./mapView";
import "./storeInfo.css";
// import 'leaflet/dist/leaflet.css';
// import {Link} from "react-router-dom";

function StoreInfo(props) {
    return (
        <div className="storeStyle">
            <h2 className="title is-2">Store Info</h2>
            <br/>
            <h6 className="subtitle is-6 storeText has-text-white">{props.storeText}</h6>
            <div className="columns is-justify-content-center storeText">
                <div className="column is-12">
                    <h6 className="subtitle is-6 has-text-white">Phone Number: 360-482-5566</h6>
                </div>
            </div>
            <div className="columns is-justify-content-center storeText">
                <div className="column is-12">
                    <h6 className="subtitle is-6 has-text-white">Email: info@satsopbulbfarm.com {props.email}</h6>
                </div>
            </div>
            <div className="columns is-justify-content-center storeText">
                <div className="column is-12">
                    <h6 className="subtitle is-6 has-text-white">Store Hours: Monday-Sunday 10AM - 5PM</h6>
                </div>
            </div>
        </div>
    )
}

export default StoreInfo