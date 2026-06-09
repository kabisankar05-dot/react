import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Header from "./Header";
import NavbarMenu from "./NavbarMenu";
import CategorySidebar from "./Sidebar";
import CarouselSection from "./Carousel";

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
  const [showCategory, setShowCategory] = useState(true);

  return (
    <>
      <Header />

      <Container>
        <NavbarMenu
          toggleCategory={() => setShowCategory(!showCategory)}
          showCategory={showCategory}
        />

        <div className="mt-3">
          <Row>
            {showCategory && (
              <Col lg={3} md={4} className="d-none d-md-block">
                <CategorySidebar />
              </Col>
            )}

            <Col
              lg={showCategory ? 9 : 12}
              md={showCategory ? 8 : 12}
              sm={12}
            >
              <CarouselSection />
            </Col>
          </Row>
        </div>

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