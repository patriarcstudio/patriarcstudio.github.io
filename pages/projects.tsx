import React from "react";
import { NextPage } from "next";
import { Layout } from "@/components/layout";
import { Header } from "@/components/header";
import { Container, Grid, Heading, Text } from "@chakra-ui/react";

const ProjectPage: NextPage = () => {
  return (
    <Layout title="Projects">
      <Header />
      <Container maxW="container.xl">
        <Heading mt={5}>Projects</Heading>
        <Grid
          mt={8}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2"
        >
          <img
            src="https://raw.githubusercontent.com/patriarcstudio/patriarcstudio.github.io/assets/img1.jpg"
            alt=""
            className="rounded shadow-md cursor-pointer transition-all duration-200 hover:opacity-70"
          />
          <img
            src="https://raw.githubusercontent.com/patriarcstudio/patriarcstudio.github.io/assets/img2.jpg"
            alt=""
            className="rounded shadow-md cursor-pointer transition-all duration-200 hover:opacity-70"
          />
          <img
            src="https://raw.githubusercontent.com/patriarcstudio/patriarcstudio.github.io/assets/img3.jpg"
            alt=""
            className="rounded shadow-md cursor-pointer transition-all duration-200 hover:opacity-70"
          />
          <img
            src="https://raw.githubusercontent.com/patriarcstudio/patriarcstudio.github.io/assets/img4.jpg"
            alt=""
            className="rounded shadow-md cursor-pointer transition-all duration-200 hover:opacity-70"
          />
          <div className="mt-10 lg:mt-0 flex items-center justify-center">
            <Text fontSize="2xl" fontWeight="medium">
              Website under construction 🚧
            </Text>
          </div>
        </Grid>
      </Container>
    </Layout>
  );
};

export default ProjectPage;
