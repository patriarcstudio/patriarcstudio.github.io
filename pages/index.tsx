import React from "react";
import { NextPage } from "next";
import { Layout } from "@/components/layout";
import { Landing } from "@/components/home/landing";
import { About } from "@/components/home/about";
import { Container } from "@chakra-ui/react";
import { Services } from "@/components/home/services";
import { LearnFromUs } from "@/components/home/learnFromUs";

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Landing />
      <About />
      <Container maxW="container.lg" className="h-0.5 bg-slate-100" />
      <Services />
      <Container mt={28} maxW="container.lg" className="h-0.5 bg-slate-100" />
      <LearnFromUs />
    </Layout>
  );
};

export default HomePage;
