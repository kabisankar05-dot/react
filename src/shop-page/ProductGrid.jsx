import React from "react";
import { Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";

function ProductGrid({
  products,
  onQuickView,
}) {
  return (
    <Row>
      {products.map((product) => (
        <Col
          lg={4}
          md={6}
          sm={12}
          key={product.id}
          className="mb-4"
        >
          <ProductCard
            product={product}
            onQuickView={onQuickView}
          />
        </Col>
      ))}
    </Row>
  );
}

export default ProductGrid;