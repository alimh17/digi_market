import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayouts from "./layouts/MainLayouts.jsx";

import Home from "./pages/home/Home.jsx";
import MobileProduct from "./pages/products/mobile-product/MobileProduct";
import Mobile from "./pages/mobile/Mobile.jsx";
import Cart from "./pages/cart/Cart.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import NotFoundPage from "./pages/404/NotFoundPage";

const App = () => {
  return (
    <BrowserRouter>
      <MainLayouts>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route index element={<Home />}></Route>
          <Route path="/mobiles" element={<Mobile />}></Route>
          <Route path="/mobiles/:id" element={<MobileProduct />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MainLayouts>
    </BrowserRouter>
  );
};

export default App;
