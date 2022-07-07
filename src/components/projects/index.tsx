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
        <ProjectImage
          image={image}
          images={[
            "https://service-content.lumion.com/lumiondotcom-odd/wp-content/uploads/2019/08/Modern-residence.jpg",
            "https://service-content.lumion.com/lumiondotcom-odd/wp-content/uploads/2020/02/good-light.jpg",
            "https://service-content.lumion.com/lumiondotcom-odd/wp-content/uploads/2021/10/Kaufman_House-2.jpg",
          ]}
          key={idx}
        />
      ))}
    </Grid>
  );
};
