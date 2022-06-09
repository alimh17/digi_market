import { configureStore } from "@reduxjs/toolkit";
import { getBannersAction } from "./actions/bannerAction";

import { mobileInit } from "./actions/mobilesActions";
import rootReducer from "./reducers";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: {
        ignoredPaths: ["mobiles"],
      },
    }),
});

store.dispatch(mobileInit());
store.dispatch(getBannersAction());

export default store;
