import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChakraWrap } from "./components/chakraWrap";
import { Header } from "./components/header";
import { HomePage } from "./pages";
import { Footer } from "./components/footer";
import { ProjectPage } from "./pages/projectPage";

export const App: React.FC = () => {
  const images = [
    "https://service-content.lumion.com/lumiondotcom-odd/wp-content/uploads/2019/08/Modern-residence.jpg",
    "https://service-content.lumion.com/lumiondotcom-odd/wp-content/uploads/2020/02/good-light.jpg",
    "https://service-content.lumion.com/lumiondotcom-odd/wp-content/uploads/2021/10/Kaufman_House-2.jpg",
    "https://service-content.lumion.com/lumiondotcom-odd/wp-content/uploads/2019/08/Modern-residence.jpg",
    "https://service-content.lumion.com/lumiondotcom-odd/wp-content/uploads/2020/02/good-light.jpg",
    "https://service-content.lumion.com/lumiondotcom-odd/wp-content/uploads/2021/10/Kaufman_House-2.jpg",
    "https://service-content.lumion.com/lumiondotcom-odd/wp-content/uploads/2019/08/Modern-residence.jpg",
    "https://service-content.lumion.com/lumiondotcom-odd/wp-content/uploads/2020/02/good-light.jpg",
    "https://service-content.lumion.com/lumiondotcom-odd/wp-content/uploads/2021/10/Kaufman_House-2.jpg",
  ];

  return (
    <ChakraWrap>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/proposed"
            element={<ProjectPage title="Proposed projects" images={images} />}
          />
          <Route
            path="/completed"
            element={<ProjectPage title="Completed projects" images={images} />}
          />
          <Route
            path="/ongoing"
            element={<ProjectPage title="On going projects" images={images} />}
          />
        </Routes>
        <Footer />
      </Router>
    </ChakraWrap>
  );
};
