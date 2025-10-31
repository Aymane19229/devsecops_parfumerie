import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import App from "./App";
import Homme from "./pages/Homme";
import Femme from "./pages/Femme";
import Packs from "./pages/Packs";
import Checkout from "./pages/Checkout";
import { CartProvider } from "./context/CartContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/homme" element={<Homme />} />
            <Route path="/femme" element={<Femme />} />
            <Route path="/packs" element={<Packs />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
