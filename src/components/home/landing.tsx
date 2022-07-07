import React from "react";
import { Text, Heading } from "@chakra-ui/react";

export const Landing: React.FC = () => {
  return (
    <div id="about">
      <div className="mt-16 md:mt-28 lg:mt-44 relative w-full h-40 md:h-72">
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source
            src="https://raw.githubusercontent.com/patriarcstudio/patriarcstudio.github.io/assets/lumion_render.mp4"
            type="video/mp4"
          />
        </video>
        <Heading className="text-5xl md:text-8xl w-full h-full bg-white mix-blend-screen text-center">
          Architecting Your Vision
        </Heading>
      </div>
      <article className="md:w-1/2">
        <h2 className="text-3xl font-medium mb-5">
          Patriarc Architecture Studio
        </h2>
        <Text className="text-xl md:text-3xl">
          Leading architecture firm with solid design and architecture
          expertise. We design residential, commercial, interior projects & much
          more.
        </Text>
      </article>
    </div>
  );
};
