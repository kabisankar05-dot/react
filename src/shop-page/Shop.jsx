import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import FilterSidebar from "./FilterSidebar";
import ProductGrid from "./ProductGrid";
import products from "./products";
import "../shop-page/ShopPage.css";

function Shop() {
  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(100);

  const filteredProducts = products.filter((item) => {
    const categoryMatch =
      category === "All" ||
      item.category === category;

    const priceMatch =
      item.price <= maxPrice;

    return categoryMatch && priceMatch;
  });

  return (
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
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Shop;