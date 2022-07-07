import React from "react";
import { Grid } from "@chakra-ui/react";
import { ProjectImage } from "./projectImage";

interface Props {
  images: string[];
}

export const ProjectGrid: React.FC<Props> = ({ images }) => {
  return (
    <Grid
      mt={8}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2"
    >
      {images.map((image, idx) => (
        <ProjectImage image={image} images={images} key={idx} />
      ))}
    </Grid>
  );
};
