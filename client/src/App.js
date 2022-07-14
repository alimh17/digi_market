import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayouts from "./layouts/MainLayouts.jsx";

import Home from "./pages/home/Home.jsx";
import MobileProduct from "./pages/products/mobile-product/MobileProduct";
import LaptopProduct from "./pages/products/laptop-product/LaptopProduct";
import Mobile from "./pages/mobile/Mobile.jsx";
import Cart from "./pages/cart/Cart.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import NotFoundPage from "./pages/404/NotFoundPage";
import { QueryClient, QueryClientProvider } from "react-query";
import Laptops from "./pages/laptop/Laptops.jsx";
import Tablets from "./pages/tablets/Tablets.jsx";
import TabletProduct from "./pages/products/tablet-product/TabletProduct.jsx";

const App = () => {

  const queryClient = new QueryClient()

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <MainLayouts>
          <Routes>
            <Route path="/" element={<App />}></Route>
            <Route index element={<Home />}></Route>
            <Route path="/mobiles" element={<Mobile />}></Route>
            <Route path="/mobiles/:id" element={<MobileProduct />}></Route>
            <Route path="/laptops" element={<Laptops />}></Route>
            <Route path="/laptops/:id" element={<LaptopProduct />}></Route>
            <Route path="/tablets" element={<Tablets />}></Route>
            <Route path="/tablets/:id" element={<TabletProduct />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </MainLayouts>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
