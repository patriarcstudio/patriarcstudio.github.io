import React from "react";
import { Container, Heading } from "@chakra-ui/react";
import { ServiceBox } from "./serviceBox";

export const Services: React.FC = () => {
  return (
    <Container maxW="container.xl" mt={28}>
      <h1 className="text-3xl font-medium">
        Our{" "}
        <span className="text-accent underline underline-offset-4">
          Services
        </span>
      </h1>
      <ServiceBox
        number="01"
        title="Architectural Drawings"
        description="Architectural drawing is detailed drawing of a residence, building
        or any structure. These drawings give an idea to workers & make
        their job easier."
        className="mt-10 bg-appService1"
        image="https://raw.githubusercontent.com/patriarcstudio/patriarcstudio.github.io/assets/service_1.png"
      />
      <ServiceBox
        number="02"
        title="Interior Design"
        description="The art or practice of planning and supervising the design and execution of architectural interiors and their furnishings."
        className="mt-5 bg-appService3"
        image="https://raw.githubusercontent.com/patriarcstudio/patriarcstudio.github.io/assets/service_3.png"
        rightAlign
      />
      <ServiceBox
        number="03"
        title="Project Consultancy"
        description="We provide oversight and leadership in executing projects from planning to completion."
        className="mt-5 bg-appService2"
        image="https://raw.githubusercontent.com/patriarcstudio/patriarcstudio.github.io/assets/service_2.png"
      />
    </Container>
  );
};
