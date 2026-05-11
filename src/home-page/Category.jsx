import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

import category1 from "../assets/category-1.png";
import category2 from "../assets/category-2.png";
import category3 from "../assets/category-3.png";
import category4 from "../assets/category-4.png";
import category5 from "../assets/category-5.png";
import category6 from "../assets/category-6.png";
import category7 from "../assets/category-7.png";
import category8 from "../assets/category-8.png";
import category9 from "../assets/category-9.png";
import category10 from "../assets/category-10.png";
import category11 from "../assets/category-11.png";
import category12 from "../assets/category-12.png";

import "../css/Category.css";

/* =========================
   JSON DATA
========================= */

const categories = [
  {
    id: 1,
    name: "Fresh Fruit",
    image: category1,
  },

  {
    id: 2,
    name: "Fresh Vegetables",
    image: category2,
  },

  {
    id: 3,
    name: "Meat & Fish",
    image: category3,
  },

  {
    id: 4,
    name: "Snacks",
    image: category4,
  },

  {
    id: 5,
    name: "Beverages",
    image: category5,
  },

  {
    id: 6,
    name: "Beauty & Health",
    image: category6,
  },

  {
    id: 7,
    name: "Bread & Bakery",
    image: category7,
  },

  {
    id: 8,
    name: "Baking Needs",
    image: category8,
  },

  {
    id: 9,
    name: "Cooking",
    image: category9,
  },

  {
    id: 10,
    name: "Diabetic Food",
    image: category10,
  },

  {
    id: 11,
    name: "Dish Detergents",
    image: category11,
  },

  {
    id: 12,
    name: "Oil",
    image: category12,
  },
];

const CategorySection = () => {
  return (
    <div className="category-section">

      <Container>

        <div className="section-heading">

          <span>CATEGORY</span>

          <h2>Shop by Top Categories</h2>

        </div>

        <Row className="g-4">

          {categories.map((item) => (

            <Col
              lg={2}
              md={3}
              sm={4}
              xs={6}
              key={item.id}
            >

              <Card className="category-card">

                <div className="category-image">

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                </div>

                <Card.Body>

                  <h5>{item.name}</h5>

                </Card.Body>

              </Card>

            </Col>

          ))}

        </Row>

      </Container>

    </div>
  );
};

export default CategorySection;