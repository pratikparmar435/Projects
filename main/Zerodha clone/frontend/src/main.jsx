import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./landingg_page/home/HomePage";
import Signup from "./landingg_page/signup/Signup";
import AboutPage from "./landingg_page/about/AboutPage";
import ProductPage from "./landingg_page/products/ProductPage";
import PricingPage from "./landingg_page/pricing/PricingPage";
import SupportPage from "./landingg_page/support/SupportPage";
import Navbar from "./landingg_page/Navbar";
import Footer from "./landingg_page/Footer";
import NotFound from "./landingg_page/NotFound";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer></Footer>
  </BrowserRouter>
);
