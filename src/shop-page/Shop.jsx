import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Header from "./Header";
import Navbars from "./Navbar";
import FilterSidebar from "./FilterSidebar";
import ProductGrid from "./ProductGrid";
import ProductQuickView from "./ProductQuickView";

import products from "./products";

import ShopBanner from "./ShopBanner";
import FooterSection from "../home-page/FooterSection";

import "../shop-page/ShopPage.css";

function Shop() {
  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(100);

  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = products.filter((item) => {
    const categoryMatch =
      category === "All" ||
      item.category === category;

    const priceMatch =
      item.price <= maxPrice;

    return categoryMatch && priceMatch;
  });

  const handleQuickView = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  return (
    <>
      <Header />
      <Navbars />
      <ShopBanner />

      <Container className="py-4">
        <Row>
          <Col lg={3}>
            <FilterSidebar
              category={category}
              setCategory={setCategory}
              maxPrice={maxPrice}
              setMaxPrice={setMaxPrice}
            />
          </Col>

          <Col lg={9}>
            <h6>
              {filteredProducts.length} Results Found
            </h6>

            <ProductGrid
              products={filteredProducts}
              onQuickView={handleQuickView}
            />
          </Col>
        </Row>
      </Container>

      {selectedProduct && (
        <ProductQuickView
          show={showModal}
          handleClose={() => setShowModal(false)}
          product={selectedProduct}
        />
      )}

      <FooterSection />
    </>
  );
}

export default Shop;