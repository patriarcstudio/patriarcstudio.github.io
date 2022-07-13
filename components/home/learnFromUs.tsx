import React from "react";
import Link from "next/link";
import { BsArrowRightCircle } from "react-icons/bs";
import { Container, Text, Link as ChakraLink } from "@chakra-ui/react";

export const LearnFromUs: React.FC = () => {
  return (
    <Container mt={28} maxW="container.xl">
      <h2 className="text-3xl font-medium">
        <span className="text-accent underline underline-offset-4">Learn</span>{" "}
        from us
      </h2>
      <div className="lg:w-1/2 mt-10">
        <Text fontSize="2xl">
          We regularly provide training in designing & visualizing softwares,
          offer advanced training to newbie architects & designers and walk you
          through creating awesome renders.
        </Text>
      </div>
      <Link href="/training">
        <ChakraLink className="text-xl opacity-80 mt-10 flex items-center">
          learn more <BsArrowRightCircle className="mt-1 ml-2" />
        </ChakraLink>
      </Link>
    </Container>
  );
};
