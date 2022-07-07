import React from "react";
import { Container, Heading } from "@chakra-ui/react";
import { ProjectGrid } from "../components/projects";

interface Props {
  images: string[];
  title: string;
}

export const ProjectPage: React.FC<Props> = ({ title, images }) => {
  return (
    <Container maxW="container.xl">
      <Heading mt={8}>{title}</Heading>
      <ProjectGrid images={images} />
    </Container>
  );
};
