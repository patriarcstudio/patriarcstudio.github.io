import React from "react";
import Slider from "react-slick";

interface Props {
  images: string[];
}

export const ImageSlider: React.FC<Props> = ({ images }) => {
  return (
    <Slider arrows={false} dots autoplay speed={2000} autoplaySpeed={2000}>
      {images.map((image, idx) => (
        <img src={image} key={idx} alt="" className="w-full object-cover rt" />
      ))}
    </Slider>
  );
};
