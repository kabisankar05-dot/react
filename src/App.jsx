import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

import Header from "./home-page/Header";
import NavbarMenu from "./home-page/NavbarMenu";
import CategorySidebar from "./home-page/Sidebar";
import CarouselSection from "./home-page/Carousel";

import Home from "./home-page/Home";
import Shop from "./shop-page/Shop";

function App() {
  const [showCategory, setShowCategory] = useState(true);

  return (
    <>
      <Header />

      <Container>
        <NavbarMenu
          toggleCategory={() =>
            setShowCategory(!showCategory)
          }
          showCategory={showCategory}
        />

        <Routes>

          {/* HOME PAGE */}
          <Route
            path="/"
            element={
              <>
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

                <Home />
              </>
            }
          />

          {/* SHOP PAGE */}
          <Route path="/shop" element={<Shop />} />

        </Routes>
      </Container>
    </>
  );
}

export default App;