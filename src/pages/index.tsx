import React from "react";
import { Container } from "@chakra-ui/react";
import { Landing } from "../components/home/landing";
import { LearnFromUs } from "../components/home/learnFromUs";
import { Projects } from "../components/home/projects";

export const HomePage: React.FC = () => {
  return (
    <Container maxW="container.xl">
      <Landing />
      <div id="projects" className="mt-16 md:mt-36">
        <Projects
          title="proposed"
          link="/proposed"
          exteriors={[
            "https://service-content.lumion.com/lumiondotcom-odd/wp-content/uploads/2019/08/Modern-residence.jpg",
            "https://service-content.lumion.com/lumiondotcom-odd/wp-content/uploads/2020/02/good-light.jpg",
            "https://service-content.lumion.com/lumiondotcom-odd/wp-content/uploads/2021/10/Kaufman_House-2.jpg",
          ]}
          interiors={[
            "https://service-content.lumion.com/lumiondotcom-odd/wp-content/uploads/2019/08/Modern-residence.jpg",
            "https://service-content.lumion.com/lumiondotcom-odd/wp-content/uploads/2020/02/good-light.jpg",
            "https://service-content.lumion.com/lumiondotcom-odd/wp-content/uploads/2021/10/Kaufman_House-2.jpg",
          ]}
        />
      </div>
      <div className="mt-16">
        <Projects
          title="completed"
          link="/completed"
          exteriors={[
            "https://service-content.lumion.com/lumiondotcom-odd/wp-content/uploads/2019/08/Modern-residence.jpg",
            "https://service-content.lumion.com/lumiondotcom-odd/wp-content/uploads/2020/02/good-light.jpg",
            "https://service-content.lumion.com/lumiondotcom-odd/wp-content/uploads/2021/10/Kaufman_House-2.jpg",
          ]}
          interiors={[
            "https://service-content.lumion.com/lumiondotcom-odd/wp-content/uploads/2019/08/Modern-residence.jpg",
            "https://service-content.lumion.com/lumiondotcom-odd/wp-content/uploads/2020/02/good-light.jpg",
            "https://service-content.lumion.com/lumiondotcom-odd/wp-content/uploads/2021/10/Kaufman_House-2.jpg",
          ]}
        />
      </div>
      <div className="mt-16">
        <Projects
          title="on going"
          link="/ongoing"
          exteriors={[
            "https://service-content.lumion.com/lumiondotcom-odd/wp-content/uploads/2019/08/Modern-residence.jpg",
            "https://service-content.lumion.com/lumiondotcom-odd/wp-content/uploads/2020/02/good-light.jpg",
            "https://service-content.lumion.com/lumiondotcom-odd/wp-content/uploads/2021/10/Kaufman_House-2.jpg",
          ]}
          interiors={[
            "https://service-content.lumion.com/lumiondotcom-odd/wp-content/uploads/2019/08/Modern-residence.jpg",
            "https://service-content.lumion.com/lumiondotcom-odd/wp-content/uploads/2020/02/good-light.jpg",
            "https://service-content.lumion.com/lumiondotcom-odd/wp-content/uploads/2021/10/Kaufman_House-2.jpg",
          ]}
        />
      </div>
      <LearnFromUs />
    </Container>
  );
};
