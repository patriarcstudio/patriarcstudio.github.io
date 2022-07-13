import React from "react";
import Link from "next/link";
import { Container, Flex, Text, Link as ChakraLink } from "@chakra-ui/react";

export const Header: React.FC = () => {
  return (
    <Container maxW="container.2xl" mt={5}>
      <Flex
        alignItems="center"
        className="w-full"
        justifyContent="space-between"
      >
        <ChakraLink>
          <Link href="/">
            <Text fontSize="2xl" className="font-medium">
              Patriarc.
            </Text>
          </Link>
        </ChakraLink>
        <div className="flex items-center">
          <Link href="/projects">
            <span className="cursor-pointer duration-200 transition-all hover:text-accent">
              Projects
            </span>
          </Link>
          <Link href="/training">
            <span className="cursor-pointer duration-200 transition-all ml-5 hover:text-accent ">
              Training
            </span>
          </Link>
          <div className="hidden md:block">
            <a href="/#about">
              <span className="cursor-pointer duration-200 transition-all ml-5 hover:text-accent">
                About
              </span>
            </a>
            <a href="#contact">
              <span className="cursor-pointer duration-200 transition-all ml-5 hover:text-accent ">
                Contact
              </span>
            </a>
          </div>
        </div>
        {/* <Container
          maxW="container.xl"
          mt={1}
          className="flex items-center justify-between w-full"
        >
          <Flex alignItems="center">
            <Link href="/projects">
              <span className="cursor-pointer duration-200 transition-all hover:text-accent">
                Projects
              </span>
            </Link>
            <Link href="/projects">
              <span className="cursor-pointer duration-200 transition-all ml-5 hover:text-accent ">
                Training
              </span>
            </Link>
          </Flex>
          <Flex alignItems="center" className="hidden md:visible">
            <a href="/#about">
              <span className="cursor-pointer duration-200 transition-all hover:text-accent">
                About
              </span>
            </a>
            <a href="#contact">
              <span className="cursor-pointer duration-200 transition-all ml-5 hover:text-accent ">
                Contact
              </span>
            </a>
          </Flex>
        </Container> */}
      </Flex>
    </Container>
  );
};
