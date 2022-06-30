import { configureStore } from "@reduxjs/toolkit";

import { laptopsInit } from "./actions/laptopsAction";
import { mobileInit } from "./actions/mobilesActions";

import rootReducer from "./reducers";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: {
        ignoredPaths: ["mobiles", "laptops"],
      },
    }),
});

store.dispatch(mobileInit());
store.dispatch(laptopsInit());

export default store;
