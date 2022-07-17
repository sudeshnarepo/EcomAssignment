import Product from "./pages/Product";
import Cart from "./components/cart/Cart";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./components/product-list/ProductDetail";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import FooterEnd from "./components/footer/footer-end/FooterEnd";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/product/Cart" element={<Cart />} />
      </Routes> 
    <FooterEnd/>
    </div>
  );
}

export default App;
