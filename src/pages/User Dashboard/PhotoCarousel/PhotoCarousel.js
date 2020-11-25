import React from "react";
import { Carousel } from "react-responsive-carousel";
import {
  Image,
  Video,
  Transformation,
  CloudinaryContext,
} from "cloudinary-react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./PhotoCarousel.css";

function PhotoCarousel() {
  const photoArray = [
    {
      image: "Satsop%20Bulb%20Farm/Satsop%20Bulb%20Farm/33_i77u2r.jpg",
    },
    {
      image: "Satsop%20Bulb%20Farm/Satsop%20Bulb%20Farm/38_vjsetv.jpg",
    },
    {
      image:
        "Satsop%20Bulb%20Farm/Satsop%20Bulb%20Farm/classic_yellow_Daffodils_bulbs_mceqkd.jpg",
    },
    {
      image: "Satsop%20Bulb%20Farm/Satsop%20Bulb%20Farm/36_k4ddsd.jpg",
    },
    {
      image: "Satsop%20Bulb%20Farm/Satsop%20Bulb%20Farm/3_lngfl5.jpg",
    },
    {
      image: "Satsop%20Bulb%20Farm/Satsop%20Bulb%20Farm/39_pdg7r5.jpg",
    },
    {
      image: "Satsop%20Bulb%20Farm/Satsop%20Bulb%20Farm/37_vkrj42.jpg",
    },
    {
      image: "Satsop%20Bulb%20Farm/Satsop%20Bulb%20Farm/23_bccxxt.jpg",
    },
    {
      image: "Satsop%20Bulb%20Farm/Satsop%20Bulb%20Farm/19_hok3pi.jpg",
    },
    {
      image: "Satsop%20Bulb%20Farm/Satsop%20Bulb%20Farm/18_ovj1op.jpg",
    },
  ];

  return (
    <div className="carousel__container">
      <Carousel
        infiniteLoop="true"
        autoPlay="true"
        interval="3000"
        width="100%"
        showArrows="false"
        showStatus="false"
        showIndicators="false"
        showThumbs="false"
      >
        {photoArray.map((image) => (
          <div style={{ height: 600 }}>
            <Image cloudName="satsop-bulb-farm" publicId={image.image} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default PhotoCarousel;
