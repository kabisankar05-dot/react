import React from "react";
import { Container } from "react-bootstrap";

import ServiceSection from "./Service";
import Banner from "./Banner";
import Category from "./Category";
import FeaturedProducts from "./FeaturedProducts";
import VideoBanner from "./VideoBanner";
import TeamSection from "./TeamSection";
import TestimonialSection from "./TestimonialSection";
import BrandLogoSection from "./BrandLogoSection";
import FooterSection from "./FooterSection";

const Home = () => {
  return (
    <>
      <Container>
        <ServiceSection />
        <Banner />
        <Category />
        <FeaturedProducts />
        <VideoBanner />
        <TeamSection />
        <TestimonialSection />
        <BrandLogoSection />
      </Container>

      <FooterSection />
    </>
  );
};

export default Home;