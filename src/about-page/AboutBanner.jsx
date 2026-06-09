import React from "react";
import BreadcrumbBanner from "../components/BreadrumbBanner";

const About = () => {
  return (
    <>
      <BreadcrumbBanner
        parent="Pages"
        parentLink="/about"
        title="About Us"
      />

      <h2>About Us Page</h2>
    </>
  );
};

export default About;