import React from "react";
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

import "./about.css";
// import Divider from '@material-ui/core/Divider';

function About(props) {

const photoArray =[
    {
        image: "Satsop%20Bulb%20Farm/Satsop%20Bulb%20Farm/33_i77u2r.jpg"
    },
    {
        image: "Satsop%20Bulb%20Farm/Satsop%20Bulb%20Farm/38_vjsetv.jpg"
    },
    {
        image: "Satsop%20Bulb%20Farm/Satsop%20Bulb%20Farm/classic_yellow_Daffodils_bulbs_mceqkd.jpg"
    },
    {
        image: "Satsop%20Bulb%20Farm/Satsop%20Bulb%20Farm/36_k4ddsd.jpg"
    },
    {
        image: "Satsop%20Bulb%20Farm/Satsop%20Bulb%20Farm/3_lngfl5.jpg"
    },
    {
        image: "Satsop%20Bulb%20Farm/Satsop%20Bulb%20Farm/39_pdg7r5.jpg"
    },
    {
        image: "Satsop%20Bulb%20Farm/Satsop%20Bulb%20Farm/37_vkrj42.jpg"
    },
    {
        image: "Satsop%20Bulb%20Farm/Satsop%20Bulb%20Farm/23_bccxxt.jpg"
    },
    {
        image: "Satsop%20Bulb%20Farm/Satsop%20Bulb%20Farm/19_hok3pi.jpg"
    },
    {
        image: "Satsop%20Bulb%20Farm/Satsop%20Bulb%20Farm/18_ovj1op.jpg"
    }
]


    return (
        <div className="aboutStyle">

            <Carousel infiniteLoop="true" autoPlay="true" interval="3000" width="100%" showArrows="false" showStatus="false" showIndicators="false" showThumbs="false">
                {photoArray.map(image => 
                    <div style={{ height: 250 }}>
                        <Image cloudName="satsop-bulb-farm" publicId={image.image} />
                    </div>)}
            </Carousel>

            <div className="columns aboutText">
                <div className="column is-12">
                    <h6 class="title is-6">{props.text3}</h6>
                </div>
            </div>

            <div className="columns aboutText">
                <div className="column is-3">
                    <img src="https://res.cloudinary.com/satsop-bulb-farm/image/upload/v1605897599/Satsop%20Bulb%20Farm/Satsop%20Bulb%20Farm/sbf5_rkemhu.jpg" alt="Garden" />
                </div>
                <div className="column is-9">
                    {/* <p>We are a family farm and have been in the business of growing flower bulbs since the mid 1930's. We are currently the fourth generation to continue to own and operate this venture. We grow about 70 different varieties of daffodils and 30 varieties of tulips.</p> */}
                    {props.text1}
                </div>
            </div>

            <div className="columns aboutText">
                <div className="column is-9">
                    {/* <p>A lovely display garden is located on the farm and is in full bloom during the spring months to help customers visualize what many of our varieties might look like in their own yards. Bulbs can be pre-ordered at this time, as it is a good opportunity to actually view all of the different varieties and their individual characteristics. Those pre-season orders are then ready for pick up or shipment in the fall when we open our store for dry bulb sales beginning September 15th throught October 30th.
                    During this time the bulbs are available to purchase and are sold in any amount desired. Customers view a photo of each variety to see what they look like in the fall. Family members are always on hand to answer questions.</p> */}
                    {props.text2}
                </div>
                <div className="column is-3">
                    <img src="https://res.cloudinary.com/satsop-bulb-farm/image/upload/v1605896239/Satsop%20Bulb%20Farm/Satsop%20Bulb%20Farm/sbf_front_page1_a59pz4.jpg" alt="Flowers" />
                </div>
            </div>

            <div className="columns aboutText">
                <div className="column is-3">
                    <img src="https://res.cloudinary.com/satsop-bulb-farm/image/upload/v1605897806/Satsop%20Bulb%20Farm/Satsop%20Bulb%20Farm/sbf_front_page_6_punomc.jpg" alt="Flowers" />
                </div>
                <div className="column is-9">
                    <p>Even though our business is a year round operation our retail facility is open to the public only 5 months of the year.  Our farm store is open from March 1st through May 15th for the cut flower market as well as a great selection of annuals, perennials, garden tools, and general spring gardening supplies .  We reopen September 15th through October 31st for the fall bulb market including other winter plants. </p>
                </div>
            </div>
        </div>
    )
}

export default About