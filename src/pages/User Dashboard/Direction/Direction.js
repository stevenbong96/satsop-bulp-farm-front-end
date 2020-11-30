import React from "react";
import MapView from "./mapView";
import "./direction.css";
// import 'leaflet/dist/leaflet.css';
// import {Link} from "react-router-dom";

function Direction() {
    return (
        <div className="directionStyle">
            <div className="columns is-justify-content-center is-mobile">
                <div className="column is-3 storeInfo">
                    <div className="columns">
                        <div className="column is-12">
                            <h5 class="subtitle is-5">Our location</h5>
                        </div>
                    </div>

                    <div className="columns">
                        <div className="column is-12 addresStyle">
                            <h6 class="subtitle is-6">Address: 980 Monte Elma Rd.  <br /> Elma, WA  98541</h6>
                        </div>
                    </div>

                    <div className="columns">
                        <div className="column is-12">
                            <form class="directions-form" action="https://www.google.com/maps/place/Satsop+Bulb+Farm/@47.0047691,-123.4744082,16.5z/data=!4m13!1m7!3m6!1s0x5492290aa727fdf9:0xf881983b2eecb0ec!2sSatsop,+WA+98541!3b1!8m2!3d47.0031512!4d-123.4834945!3m4!1s0x0:0xed9ea646b607879a!8m2!3d47.0038552!4d-123.4734468" method="get" target="_blank">
                                <button className="button is-rounded has-background-success">
                                    Get Directions
                            </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="column is-9 mapStyle">
                    <MapView />
                </div>
            </div>
        </div>
    )
}

export default Direction