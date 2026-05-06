import { useState } from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Header from "./Header";
import NavbarMenu from "./NavbarMenu";
import CategorySidebar from "./Sidebar";
import CarouselSection from "./Carousel";

const Home = () => {
  const [showCategory, setShowCategory] = useState(true);

  return (
    <>
      {/*  FULL WIDTH HEADER */}
      <Header />

      {/*  CONTENT INSIDE CONTAINER */}
      <Container>
        <NavbarMenu toggleCategory={() => setShowCategory(!showCategory)} />
          <div className="mt-3">
      <Row>
        {/* LEFT CATEGORY */}
        <Col lg={3} md={4} className="d-none d-md-block">
          <CategorySidebar />
        </Col>

        {/* RIGHT CAROUSEL */}
        <Col lg={9} md={8} sm={12}>
          <CarouselSection />
        </Col>
      </Row>
    </div>
      </Container>
    </>
  );
};

export default Home;