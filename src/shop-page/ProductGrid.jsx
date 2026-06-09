import React from "react";
import { Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";

function ProductGrid({ products }) {
  return (
    <Row>
      {products.map((product) => (
        <Col lg={4} md={6} sm={12}
          key={product.id}>
          <ProductCard
            product={product}
          />
        </Col>
      ))}
    </Row>
  );
}

export default ProductGrid;