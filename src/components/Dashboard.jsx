import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./AboutUs";
import MainPage from "./MainPage";
import NotFoundPage from "./NotFoundPage";
import ProductList from "./ProductList";

function Dashboard() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/about" element={<AboutUs />} />
        <Route elements={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default Dashboard;
