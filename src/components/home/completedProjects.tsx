import React from "react";
import { Projects } from "./projects";

export const CompletedProjects: React.FC = () => {
  return (
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
  );
};
