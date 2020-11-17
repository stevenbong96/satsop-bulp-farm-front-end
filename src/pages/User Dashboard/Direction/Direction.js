import React from "react";
import MapView from "./mapView";
import "./direction.css";
// import 'leaflet/dist/leaflet.css';
// import {Link} from "react-router-dom";

function Direction() {
    return (
        <div className="row directionStyle is-justify-content-center">
            <div className="column is-12">
                <div className="row storeInfo">
                    <p>Phone: 360-482-5566</p>
                    <p>Email: info@satsopbulbfarm.com</p>
                    <p>Our location</p>
                    <p>Address: 980 Monte Elma Rd.  <br /> Elma, WA  98541</p>
                    {/* <button className="button is-rounded" onClick="document.location='https://www.google.com/maps/place/Satsop+Bulb+Farm/@47.0047691,-123.4744082,16.5z/data=!4m13!1m7!3m6!1s0x5492290aa727fdf9:0xf881983b2eecb0ec!2sSatsop,+WA+98541!3b1!8m2!3d47.0031512!4d-123.4834945!3m4!1s0x0:0xed9ea646b607879a!8m2!3d47.0038552!4d-123.4734468';"> 
                        Get Directions
                    </button> */}
                    <form class='directions-form' action="https://www.google.com/maps/place/Satsop+Bulb+Farm/@47.0047691,-123.4744082,16.5z/data=!4m13!1m7!3m6!1s0x5492290aa727fdf9:0xf881983b2eecb0ec!2sSatsop,+WA+98541!3b1!8m2!3d47.0031512!4d-123.4834945!3m4!1s0x0:0xed9ea646b607879a!8m2!3d47.0038552!4d-123.4734468" method="get" target="_blank">
                        <button className="button is-rounded" onClick="document.location='https://www.google.com/maps/place/Satsop+Bulb+Farm/@47.0047691,-123.4744082,16.5z/data=!4m13!1m7!3m6!1s0x5492290aa727fdf9:0xf881983b2eecb0ec!2sSatsop,+WA+98541!3b1!8m2!3d47.0031512!4d-123.4834945!3m4!1s0x0:0xed9ea646b607879a!8m2!3d47.0038552!4d-123.4734468';">
                            Get Directions
                    </button>
                    </form>
                </div>

                <MapView />
            </div>
        </div>
    )
}

export default Direction