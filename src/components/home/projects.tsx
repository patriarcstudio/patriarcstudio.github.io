import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { Link } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { ImageSlider } from "./imageSlider";

interface Props {
  exteriors: string[];
  interiors: string[];
  title: string;
  link: string;
}

export const Projects: React.FC<Props> = ({
  exteriors,
  interiors,
  title,
  link,
}) => {
  return (
    <div>
      <div>
        <h2 className="text-3xl md:text-4xl font-medium">{title}</h2>
        <h2 className="text-3xl md:text-4xl font-medium stroked">projects</h2>
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-2">
        <ImageSlider images={exteriors} />
        <ImageSlider images={interiors} />
      </div>
      <div className="mt-8">
        <ReactLink to={link}>
          <Link fontSize="xl">
            <div className="flex items-center">
              view all projects <BsArrowRightCircle className="mt-1 ml-2" />
            </div>
          </Link>
        </ReactLink>
      </div>
    </div>
  );
};
