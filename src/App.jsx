import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail"; 
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";  
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ServicePage from "./pages/ServicePage"; 
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productdetail/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} /> 
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
