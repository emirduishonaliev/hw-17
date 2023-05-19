import React from "react";
import { Route, Routes } from "react-router-dom";
import { Products } from "../pages/Products";
import { MyCart } from "../pages/MyCart";
import { MyOrders } from "../pages/MyOrders";
import { ProductDetails } from "../pages/ProductDetails";
import { Home } from "../pages/Home";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/products" element={<Products />} />
      <Route path="/products/:productId/details" element={<ProductDetails />} />
      <Route path="/myCart" element={<MyCart />} />
      <Route path="/myOrder" element={<MyOrders />} />
      <Route path="/" index element={<Home />} />
      <Route path="*" element={<h2>Not Found</h2>} />
    </Routes>
  );
};
