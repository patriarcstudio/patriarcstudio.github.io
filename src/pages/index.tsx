import { Container } from "@chakra-ui/react";
import React from "react";
import { CompletedProjects } from "../components/home/completedProjects";
import { Landing } from "../components/home/landing";
import { LearnFromUs } from "../components/home/learnFromUs";
import { ProposedProjects } from "../components/home/proposedProjects";

export const HomePage: React.FC = () => {
  return (
    <Container maxW="container.xl">
      <Landing />
      <ProposedProjects />
      <CompletedProjects />
      <LearnFromUs />
    </Container>
  );
};
