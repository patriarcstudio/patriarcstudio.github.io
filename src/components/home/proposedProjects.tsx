import React from "react";
import { Projects } from "./projects";

export const ProposedProjects: React.FC = () => {
  return (
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
  );
};
