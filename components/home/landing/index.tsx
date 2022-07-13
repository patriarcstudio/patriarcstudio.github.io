import React, { useState } from "react";
import Link from "next/link";
import { landingData } from "./data";
import { Header } from "@/components/header";
import { AiOutlineRight } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import {
  Container,
  Heading,
  SimpleGrid,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";

export const Landing: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  return (
    <div className="relative h-screen w-full">
      <img
        src={landingData[currentIdx].image}
        className="w-full h-screen object-cover"
        style={{
          filter: "brightness(40%)",
        }}
        alt=""
      />
      <div className="absolute top-0 text-white w-full">
        <Header />
      </div>
      <div className="absolute w-full" style={{ top: "30%" }}>
        <Container maxW="container.xl" className="text-white">
          <Text fontSize="2xl">{landingData[currentIdx].type}</Text>
          <Heading
            mt={5}
            fontWeight="semibold"
            className="text-4xl md:text-6xl lg:text-8xl"
          >
            {landingData[currentIdx].description}
          </Heading>

          <Link href="/projects">
            <ChakraLink className="flex items-center text-2xl mt-10 md:mt-20 lg:mt-32">
              portfolio <AiOutlineRight className="mt-1" />
            </ChakraLink>
          </Link>
        </Container>
      </div>
      <Container
        maxW="container.2xl"
        className="flex xl:flex-col absolute bottom-60 md:bottom-52 lg:bottom-10  text-white text-2xl"
      >
        <a
          className="transition-all duration-200 hover:opacity-70"
          href="https://www.instagram.com/patriarc.studio"
        >
          <FaInstagram className="mr-2 xl:mb-5" />
        </a>
        <a
          className="transition-all duration-200 hover:opacity-70"
          href="https://www.facebook.com/Patriarc-Architecture-Studio-104998958952623"
        >
          <FaFacebook className="mr-2 xl:mb-5" />
        </a>
        <a
          className="transition-all duration-200 hover:opacity-70"
          href="https://www.youtube.com/channel/UCZcqSwl10W_CqBCXJfI1GHw"
        >
          <FaYoutube />
        </a>
      </Container>
      <SimpleGrid className="absolute bottom-0 right-0" columns={3} zIndex={1}>
        {landingData.map((data, idx) => (
          <div
            className="bg-white py-7 px-4 cursor-pointer group duration-200 transition-all md:w-64"
            key={idx}
            onClick={() => setCurrentIdx(idx)}
          >
            <div className={`${idx !== currentIdx && "opacity-50"}`}>
              <Text className="md:text-lg font-medium group-hover:opacity-80">
                0{idx + 1}.
              </Text>
              <Text className="md:text-lg font-bold group-hover:opacity-80">
                {data.description}
              </Text>
            </div>
          </div>
        ))}
      </SimpleGrid>
    </div>
  );
};
