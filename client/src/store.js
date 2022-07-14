import { configureStore } from "@reduxjs/toolkit";

import { laptopsInit } from "./actions/laptopsAction";
import { mobileInit } from "./actions/mobilesActions";
import { tabletInit } from "./actions/tabletsAction";

import rootReducer from "./reducers";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: {
        ignoredPaths: ["mobiles", "laptops" , "tablets"],
      },
    }),
});

store.dispatch(mobileInit());
store.dispatch(laptopsInit());
store.dispatch(tabletInit());

export default store;
