import React from "react";
import { ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import {
  FaAppleAlt,
  FaLeaf,
  FaFish,
  FaDrumstickBite,
  FaCoffee,
  FaIceCream,
  FaBreadSlice,
  FaCheese,
  FaUtensils,
} from "react-icons/fa";

import "../css/Carousel.css";

const categories = [
  { name: "Fresh Fruit", icon: <FaAppleAlt /> },
  { name: "Vegetables", icon: <FaLeaf /> },
  { name: "River Fish", icon: <FaFish /> },
  { name: "Chicken & Meat", icon: <FaDrumstickBite /> },
  { name: "Drink & Water", icon: <FaCoffee /> },
  { name: "Yogurt & Ice Cream", icon: <FaIceCream /> },
  { name: "Cake & Bread", icon: <FaBreadSlice /> },
  { name: "Butter & Cream", icon: <FaCheese /> },
  { name: "Cooking", icon: <FaUtensils /> },
];

const CategorySidebar = () => {
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    navigate("/shop");
  };

  return (
    <div className="category-wrapper">
      <ListGroup variant="flush">
        {categories.map((item, index) => (
          <ListGroup.Item
            key={index}
            className="category-item d-flex align-items-center gap-2"
            onClick={handleCategoryClick}
            style={{ cursor: "pointer" }}
          >
            {item.icon}
            {item.name}
          </ListGroup.Item>
        ))}
      </ListGroup>

      <div
        className="view-all"
        onClick={() => navigate("/shop")}
        style={{ cursor: "pointer" }}
      >
        + View all Category
      </div>
    </div>
  );
};

export default CategorySidebar;