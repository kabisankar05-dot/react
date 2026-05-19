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

const Home = () => {

  const [showCategory, setShowCategory] = useState(true);

  const toggleCategory = () => {
    setShowCategory(!showCategory);
  };

  return (
    <>
      {/* FULL WIDTH HEADER */}
      <Header />

      {/* CONTENT */}
      <Container>

        {/* NAVBAR */}
        <NavbarMenu
          toggleCategory={() =>
            setShowCategory(!showCategory)
          }

          showCategory={showCategory}
        />

        {/* HERO SECTION */}
        <div className="mt-3">

          <Row>

            {/* LEFT CATEGORY */}
            {showCategory && (
              <Col lg={3} md={4} className="d-none d-md-block">
                <CategorySidebar />
              </Col>
            )}

            {/* RIGHT CAROUSEL */}
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
    </>
    
  );
};

export default Home;