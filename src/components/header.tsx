import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { HiMenuAlt4 } from "react-icons/hi";
import {
  Container,
  Flex,
  IconButton,
  Link,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

export const Header: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef<any>();

  return (
    <>
      <Container mt={10} maxW="container.xl">
        <Flex justifyContent="space-between" alignItems="center">
          <ReactRouterLink to="/">
            <Link>
              <Text fontSize="2xl" fontWeight="medium">
                Patriarc.
              </Text>
            </Link>
          </ReactRouterLink>
          <IconButton
            aria-label="Open menu"
            icon={<HiMenuAlt4 className="text-2xl" />}
            variant="ghost"
            ref={btnRef}
            onClick={onOpen}
          />
        </Flex>
      </Container>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            <Flex mt={5}>
              <div>
                <h2 className="text-lg opacity-70">Social</h2>
                <div className="mt-5 flex flex-col">
                  <Link
                    href="https://instagram.com/patriarc.studio"
                    fontSize="xl"
                  >
                    Instagram
                  </Link>
                  <Link href="" fontSize="xl" mt={2}>
                    Youtube
                  </Link>
                </div>
              </div>
              <div className="ml-16">
                <h2 className="text-lg opacity-70">Menu</h2>
                <div className="mt-2 flex flex-col">
                  <Link fontSize="5xl" href="#projects">
                    Projects
                  </Link>
                  <Link fontSize="5xl" href="#about">
                    About
                  </Link>
                  <Link fontSize="5xl">
                    <ReactRouterLink to="/training">Training</ReactRouterLink>
                  </Link>
                  <Link fontSize="5xl" href="#contact">
                    Contact
                  </Link>
                </div>
              </div>
            </Flex>
          </DrawerBody>

          <DrawerFooter className="flex flex-row-reverse">
            <div>
              <h2 className="text-lg opacity-70">Get in touch</h2>
              <Link href="mailto:patriarc.studio@gmail.com" fontSize="xl">
                patriarc.studio@gmail.com
              </Link>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
