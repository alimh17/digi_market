import React from "react";

//components
import Banner from "./components/banner/Banner";
import BestSellingProduct from "./components/best-selling-product/BestSellingProduct";
import Brands from "./components/brands/Brands";
import Offers from "./components/offers/Offers";
import Promotion from "./components/promotion/Promotion";
import News from "./components/news/News";
import FourPorduct from "./components/fourProduct/FourPorduct";
import Services from "./components/services/Services";
import CenterBanner from './components/centerbaner/CenterBanner'

const Home = () => {
  return (
    <div className="md:mt-32 mt-3">
      <Banner />
      <Offers />
      <CenterBanner />
      <FourPorduct />
      <Promotion />
      <Services />
      <BestSellingProduct />
      <Brands />
      <News />
    </div>
  );
};

export default Home;
