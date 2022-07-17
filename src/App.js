import React ,{useState} from 'react'
import Product from "./pages/Product";
import Cart from "./components/cart/Cart";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./components/product-list/ProductDetail";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import CheckoutContact from "./components/checkout/checkout-contactinfo/CheckoutContact";
import CheckoutShipping from './components/checkout/checkout-shipping/CheckoutShipping'
import CheckoutPayment from './components/checkout/checkout-payment/CheckoutPayment'
import Login from "./components/checkout/login/Login";
import ProtectedRoute from './ProtectedRoute';
import CheckoutOrderSummary from './components/checkout/checkout-order-summary/CheckoutOrderSummary';
function App() {
  const [loggedIn, setLoggedIn] = useState(false);

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
        <Route path="/product/Cart" element={<Cart />} />
        <Route path="checkout" element={<CheckoutContact loggedIn={loggedIn} />} />
        
        <Route path="CheckoutShipping" 
        element={
            <ProtectedRoute loggedIn={loggedIn}>
              <CheckoutShipping/>
            </ProtectedRoute>
        }
        />
        <Route path="CheckoutPayment" 
        element={
          <ProtectedRoute loggedIn={loggedIn}>
            <CheckoutPayment/>
          </ProtectedRoute>
      } />
      <Route path="orderSummary" 
        element={
          <ProtectedRoute loggedIn={loggedIn}>
            <CheckoutOrderSummary/>
          </ProtectedRoute>
      } />
        <Route path="login" element= {<Login setLoggedIn={setLoggedIn}/>} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
