import Product from "./pages/Product";
import Cart from "./components/cart/Cart";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./components/product-list/ProductDetail";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import CheckoutContact from "./components/checkout/checkout-contactinfo/CheckoutContact";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />}>
          <Route path="Home" element={<Product />} />
          <Route path="Women" element={<Product />} />
          <Route path="Men" element={<Product />} />
          <Route path="electronics" element={<Product />} />
          <Route path="jewelery" element={<Product />} />
        </Route>
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="Cart" element={<Cart />} />
        <Route path="checkout" element={<CheckoutContact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
