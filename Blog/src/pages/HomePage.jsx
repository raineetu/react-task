import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Blog from "../components/Blog";
import { Routes, Route } from "react-router-dom";
import Details from "../components/Details";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <About />
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/detail/:id" element={<Details />} />
      </Routes>
    </>
  );
};

export default HomePage;
