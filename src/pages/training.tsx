import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Button, Container, Heading, Link, Text } from "@chakra-ui/react";

export const TrainingPage: React.FC = () => {
  return (
    <Container maxW="container.xl" my={5}>
      <Heading className="text-center my-20" fontSize="6xl">
        Advanced Training
      </Heading>
      <div className="flex items-center flex-col md:flex-row justify-around">
        <img
          src="https://www.sketchup.com/themes/sketchup_www_terra/images/SketchUp-Horizontal-RGB.svg"
          className="w-60"
          alt=""
        />
        <img
          src="https://service-content.lumion.com/lumiondotcom-odd/wp-content/uploads/2021/09/Lumion-horizontal-logo-01.svg"
          alt=""
          className="w-60 mt-5 md:mt-0"
        />
      </div>
      <Text fontSize="2xl" mt={8}>
        We regularly provide training in designing & visualizing softwares,
        offer advanced training to newbie architects & designers and walk you
        through creating awesome renders.
      </Text>
      <Link
        mt={8}
        className="flex justify-center"
        href="https://wa.me/918136020202"
      >
        <Button size="lg" colorScheme="teal">
          <FaWhatsapp className="mr-2 text-2xl" /> Whatsapp now
        </Button>
      </Link>
      <video controls autoPlay loop className="w-full mt-8 rounded">
        <source
          src="https://raw.githubusercontent.com/patriarcstudio/patriarcstudio.github.io/assets/lumion_render.mp4"
          type="video/mp4"
        />
      </video>
    </Container>
  );
};
