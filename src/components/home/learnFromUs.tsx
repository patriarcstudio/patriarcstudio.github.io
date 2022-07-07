import React from "react";
import { Text } from "@chakra-ui/react";
import { BsArrowRightCircle } from "react-icons/bs";
import { Link } from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";

export const LearnFromUs: React.FC = () => {
  return (
    <div className="mt-16">
      <h2 className="text-3xl md:text-4xl font-medium">Learn from us</h2>
      <div className="mt-5 md:w-1/2">
        <Text fontSize="xl">
          We regularly provide training in designing & visualizing softwares,
          offer advanced training to newbie architects & designers and walk you
          through creating awesome renders.
        </Text>
      </div>
      <video autoPlay muted loop className="w-full mt-5 rounded">
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
      </video>
      <div className="mt-5">
        <ReactLink to="/training">
          <Link fontSize="xl">
            <div className="flex items-center">
              learn more <BsArrowRightCircle className="mt-1 ml-2" />
            </div>
          </Link>
        </ReactLink>
      </div>
    </div>
  );
};
