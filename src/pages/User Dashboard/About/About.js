import React from "react";

import "./about.css";
import "../../../App.css";
// import Divider from '@material-ui/core/Divider';

function About(props) {
  return (
    <div className="about__section">
      <h2 className="section__title">ABOUT US</h2>
      <hr></hr>
      <h6 class="title is-6 has-text-white">{props.text3}</h6>

      <div className="columns about__text">
        <div className="column is-4">
          <img
            src="https://res.cloudinary.com/satsop-bulb-farm/image/upload/v1605897599/Satsop%20Bulb%20Farm/Satsop%20Bulb%20Farm/sbf5_rkemhu.jpg"
            alt="Garden"
            className="about__image"
          />
        </div>
        <div className="column is-8">{props.text1}</div>
      </div>

      <div className="columns about__text">
        <div className="column is-8">{props.text2}</div>
        <div className="column is-4">
          <img
            src="https://res.cloudinary.com/satsop-bulb-farm/image/upload/v1605896239/Satsop%20Bulb%20Farm/Satsop%20Bulb%20Farm/sbf_front_page1_a59pz4.jpg"
            alt="Flowers"
            className="about__image"
          />
        </div>
      </div>

      <div className="columns about__text">
        <div className="column is-4">
          <img
            src="https://res.cloudinary.com/satsop-bulb-farm/image/upload/v1605897806/Satsop%20Bulb%20Farm/Satsop%20Bulb%20Farm/sbf_front_page_6_punomc.jpg"
            alt="Flowers"
            className="about__image"
          />
        </div>
        <div className="column is-8">
          <p>
            Even though our business is a year round operation our retail
            facility is open to the public only 5 months of the year. Our farm
            store is open from March 1st through May 15th for the cut flower
            market as well as a great selection of annuals, perennials, garden
            tools, and general spring gardening supplies . We reopen September
            15th through October 31st for the fall bulb market including other
            winter plants.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
