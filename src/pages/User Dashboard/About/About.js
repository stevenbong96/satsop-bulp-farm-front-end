import React from "react";
import "./about.css";

function About() {
    return (
        <div className="row aboutStyle">
            <div className="column is-12">
                <div className="row pictureStyle">
                    <figure classname="image is-128x128">
                        <img src="https://bulma.io/images/placeholders/256x256.png" />
                    </figure>
                </div>

                <div className="row">
                    <p>We are a family farm and have been in the business of growing flower bulbs since the mid 1930's. We are currently the fourth generation to continue to own and operate this venture. We grow about 70 different varieties of daffodils and 30 varieties of tulips.</p>

                    <p>A lovely display garden is located on the farm and is in full bloom during the spring months to help customers visualize what many of our varieties might look like in their own yards. Bulbs can be pre-ordered at this time, as it is a good opportunity to actually view all of the different varieties and their individual characteristics. Those pre-season orders are then ready for pick up or shipment in the fall when we open our store for dry bulb sales beginning September 15th throught October 30th.
                    During this time the bulbs are available to purchase and are sold in any amount desired. Customers view a photo of each variety to see what they look like in the fall. Family members are always on hand to answer questions.</p>

                    <p>Even though our business is a year round operation our retail facility is open to the public only 5 months of the year.  Our farm store is open from March 1st through May 15th for the cut flower market as well as a great selection of annuals, perennials, garden tools, and general spring gardening supplies .  We reopen September 15th through October 31st for the fall bulb market including other winter plants, </p>
                </div>
            </div>
        </div>
    )
}

export default About