import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { HiMenuAlt4 } from "react-icons/hi";
import { MdLocationPin } from "react-icons/md";
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
          <div>
            <Link href="https://www.google.com/maps/dir/10.913671,75.917759/patriarc+architecture+studio+tirur/@10.9171672,75.9182454,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3ba7b18861012d97:0x6cc0ebde40c10ddd!2m2!1d75.9275018!2d10.9206265">
              <IconButton
                aria-label="Open menu"
                icon={<MdLocationPin className="text-2xl" />}
                variant="ghost"
              />
            </Link>
            <IconButton
              aria-label="Open menu"
              icon={<HiMenuAlt4 className="text-2xl" />}
              variant="ghost"
              ref={btnRef}
              onClick={onOpen}
            />
          </div>
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
                  <Link fontSize="5xl">
                    <ReactRouterLink to="/">Home</ReactRouterLink>
                  </Link>
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
