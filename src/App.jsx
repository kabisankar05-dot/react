import { Routes, Route } from "react-router-dom";

import Home from "./home-page/Home";
import Shop from "./shop-page/Shop";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  );
}

export default App;