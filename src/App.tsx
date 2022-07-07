import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChakraWrap } from "./components/chakraWrap";
import { Header } from "./components/header";
import { HomePage } from "./pages";
import { Footer } from "./components/footer";
import { ProjectPage } from "./pages/projectPage";
import { TrainingPage } from "./pages/training";
import { images } from "./utils/data";

export const App: React.FC = () => {
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
          <Route path="/training" element={<TrainingPage />} />
        </Routes>
        <Footer />
      </Router>
    </ChakraWrap>
  );
};
