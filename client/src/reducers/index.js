import { combineReducers } from "@reduxjs/toolkit";

import { allProductReducer } from "./allProducts";
import { cartReducer } from "./cart";
import { mobilesReducer } from "./mobiles";
import { laptopsReducer } from "./laptops";
import { tabletsReducer } from "./tablets";
import { loading } from "./loading";
import { orderingReducer } from "./ordering";
import { product } from "./product";
import { productSort } from "./productSort";

const rootReducer = combineReducers({
  allProducts: allProductReducer,
  product,
  ordering: orderingReducer,
  mobiles: mobilesReducer,
  laptops: laptopsReducer,
  tablets: tabletsReducer,
  cart: cartReducer,
  loading,
  productSort,
});

export default rootReducer;
