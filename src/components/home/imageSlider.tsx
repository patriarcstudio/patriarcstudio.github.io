import React, { useState } from "react";
import Slider from "react-slick";

interface Props {
  images: string[];
  className?: string;
}

export const ImageSlider: React.FC<Props> = ({ images, className }) => {
  const [fade, setFade] = useState(true);
  const [speed, setSpeed] = useState<number | undefined>(2000);

  return (
    <div
      onMouseOver={() => {
        setFade(false);
        setSpeed(undefined);
      }}
      onMouseLeave={() => {
        setFade(true);
        setSpeed(2000);
      }}
    >
      <Slider
        className={className}
        arrows={false}
        dots
        autoplay
        speed={speed}
        autoplaySpeed={3000}
        draggable
        fade={fade}
      >
        {images.map((image, idx) => (
          <img
            src={image}
            key={idx}
            alt=""
            className="w-full object-cover rt"
          />
        ))}
      </Slider>
    </div>
  );
};
