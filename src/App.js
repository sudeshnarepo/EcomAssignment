import Product from "./pages/Product";
import Cart from "./components/cart/Cart";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./components/product-list/ProductDetail";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";


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
    <Footer/>
    </div>
  );
}

export default App;
