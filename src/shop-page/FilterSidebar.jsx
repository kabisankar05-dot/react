import React from "react";
import { Form } from "react-bootstrap";

function FilterSidebar({
  category,
  setCategory,
  maxPrice,
  setMaxPrice,
}) {
  return (
    <div className="filter-sidebar">

      <h5>All Categories</h5>

      <Form.Check
        type="radio"
        label="All"
        checked={category === "All"}
        onChange={() =>
          setCategory("All")
        }
      />

      <Form.Check
        type="radio"
        label="Vegetables"
        checked={category === "Vegetables"}
        onChange={() =>
          setCategory("Vegetables")
        }
      />

      <Form.Check
        type="radio"
        label="Fruit"
        checked={category === "Fruit"}
        onChange={() =>
          setCategory("Fruit")
        }
      />

      <hr />

      <h5>Price</h5>

      <Form.Range
        min={0}
        max={100}
        value={maxPrice}
        onChange={(e) =>
          setMaxPrice(
            Number(e.target.value)
          )
        }
      />

      <p>
        Price: $0 - ${maxPrice}
      </p>

    </div>
  );
}

export default FilterSidebar;