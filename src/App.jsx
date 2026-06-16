import { Routes, Route } from "react-router-dom";

import Home from "./home-page/Home";
import Shop from "./shop-page/Shop";
import About from "./about-page/About-page";
import Blog from "./Blog-page/Blog-page";
import Contact from "./contact-page/Contact-page";

import ProductDetails from "./shop-page/ProductDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />

      {/* Product Details Page */}
      <Route
        path="/product/:id"
        element={<ProductDetails />}
      />
    </Routes>
  );
}

export default App;