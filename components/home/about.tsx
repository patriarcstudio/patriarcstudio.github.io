import React from "react";
import { Container, Flex, Link, Text } from "@chakra-ui/react";

export const About: React.FC = () => {
  return (
    <Container
      id="about"
      maxW="container.xl"
      className="h-screen flex items-center mb-10 md:mb-0"
    >
      <Flex alignItems="center" className="flex-col-reverse md:flex-row">
        <Flex
          className="h-full"
          direction="column"
          justifyContent="space-between"
        >
          <Text fontSize="2xl">Patriarc Architecture Studio</Text>
          <article>
            <Text fontSize="3xl" my={5}>
              Leading architecture firm with solid design and architecture
              expertise. We design residential, commercial, interior projects &
              much more.
            </Text>
          </article>
          <Link
            href="https://www.google.com/maps/dir/10.913671,75.917759/patriarc+architecture+studio+tirur/@10.9171672,75.9182454,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3ba7b18861012d97:0x6cc0ebde40c10ddd!2m2!1d75.9275018!2d10.9206265"
            fontSize="2xl"
            opacity="70%"
          >
            view address
          </Link>
        </Flex>
        <img
          src="https://raw.githubusercontent.com/patriarcstudio/patriarcstudio.github.io/assets/logo_darken.png"
          alt="Patriarc Architecture Studio"
          className="rounded my-10 md:my-0"
        />
      </Flex>
    </Container>
  );
};
