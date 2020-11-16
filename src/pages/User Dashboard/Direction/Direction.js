import React from "react";
import "./direction.css";

function Direction() {
    return(
        <div className="row directionStyle is-justify-content-center">
            <div className="column is-12">
                <div className="row storeInfo">
                    <p>Phone: 360-482-5566</p>
                    <p>Email: info@satsopbulbfarm.com</p>
                    <p>Our location</p>
                    <p>Address: 980 Monte Elma Rd.  <br /> Elma, WA  98541</p>
                    <button className="button is-rounded">Get Directions</button>
                </div>

                <div className="row mapStyle">
                    <figure classname="image is-128x128">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Google_Maps_Logo_2020.svg/1024px-Google_Maps_Logo_2020.svg.png" />
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default Direction