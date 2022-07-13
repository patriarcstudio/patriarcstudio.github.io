import React from "react";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import { Container, Link, Text } from "@chakra-ui/react";

export const Footer: React.FC = () => {
  return (
    <div
      id="contact"
      className="mt-40 py-16 md:py-32 w-full bg-black text-white"
    >
      <Container maxW="container.xl">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold">
            Have a <span className="underline">plan</span> ?
          </h2>
          <h3 className="text-4xl md:text-6xl mt-1">Tell us about it</h3>
        </div>

        <div className="flex-col flex md:flex-row md:items-center mt-16 md:mt-28 justify-between">
          <div>
            <Link href="mailto:patriarc.studio@gmail.com" _hover={{}}>
              <Text
                fontSize="xl"
                className="underline underline-offset-4 transition-all duration-200 hover:opacity-75"
              >
                patriarc.studio@gmail.com
              </Text>
            </Link>
            <Text mt={5} fontSize="lg" className="opacity-80">
              3rd floor, Express mall, Pan Bazar
            </Text>
            <Text fontSize="lg" className="opacity-80">
              Tirur, Malappuram, 676101
            </Text>
            <Text mt={5} fontSize="lg" className="opacity-80">
              <Link href="tel:+919562797208">+91 9562797208</Link>,{" "}
              <Link href="tel:+918136020202">+91 8136020202</Link>
            </Text>
          </div>
          <div className="mt-5">
            <Link
              href="https://instagram.com/patriarc.studio"
              fontSize="xl"
              className="opacity-80"
            >
              <div className="flex items-center">
                <FaInstagram className="mt-1 mr-1" /> patriarc.studio
              </div>
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCZcqSwl10W_CqBCXJfI1GHw"
              fontSize="xl"
              className="opacity-80"
            >
              <div className="mt-3 flex items-center">
                <FaYoutube className="mt-1 mr-1" /> Patriarc Architecture Studio
              </div>
            </Link>
            <Link
              href="https://www.facebook.com/Patriarc-Architecture-Studio-104998958952623"
              fontSize="xl"
              className="opacity-80"
            >
              <div className="mt-3 flex items-center">
                <FaFacebook className="mt-1 mr-1" /> patriarc architecture
                studio
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
