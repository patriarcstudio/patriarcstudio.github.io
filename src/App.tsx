import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraWrap } from "./components/chakraWrap";
import { Header } from "./components/header";
import { HomePage } from "./pages";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Footer } from "./components/footer";

export const App: React.FC = () => {
  return (
    <ChakraWrap>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </Router>
    </ChakraWrap>
  );
};
