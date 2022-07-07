import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Slider from "react-slick";

interface Props {
  image: string;
  images: string[];
}

export const ProjectImage: React.FC<Props> = ({ image, images }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [displayImage, setDisplayImage] = useState(images[0]);

  return (
    <>
      <img
        src={image}
        alt=""
        className="rounded shadow-md cursor-pointer transition-all duration-200 hover:opacity-70"
        onClick={onOpen}
      />

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="6xl"
        isCentered
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <div className="w-fit">
              Person Residence
              <Text className="text-right" fontSize="lg" fontWeight="normal">
                Place
              </Text>
            </div>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Slider arrows={false} dots>
              <img src={displayImage} alt="" />
              {images.map((image, idx) => (
                <img
                  src={image}
                  key={idx}
                  alt=""
                  className="w-full object-cover rt"
                />
              ))}
            </Slider>
            <div className="mt-10 mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {images.map((im, idx) => (
                <img
                  key={idx}
                  src={im}
                  alt=""
                  onClick={() => setDisplayImage(im)}
                  className="rounded shadow-md cursor-pointer transition-all duration-200 hover:opacity-70"
                />
              ))}
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
