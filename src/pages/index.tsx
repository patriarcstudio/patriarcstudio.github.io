import React from "react";
import { Container } from "@chakra-ui/react";
import { Landing } from "../components/home/landing";
import { LearnFromUs } from "../components/home/learnFromUs";
import { Projects } from "../components/home/projects";
import { images } from "../utils/data";

export const HomePage: React.FC = () => {
  return (
    <Container maxW="container.xl">
      <Landing />
      <div id="projects" className="mt-16 md:mt-36">
        <Projects
          title="proposed"
          link="/proposed"
          exteriors={images}
          interiors={images}
        />
      </div>
      <div className="mt-16">
        <Projects
          title="completed"
          link="/completed"
          exteriors={images}
          interiors={images}
        />
      </div>
      <div className="mt-16">
        <Projects
          title="on going"
          link="/ongoing"
          exteriors={images}
          interiors={images}
        />
      </div>
      <LearnFromUs />
    </Container>
  );
};
