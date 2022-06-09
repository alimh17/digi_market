import { configureStore } from "@reduxjs/toolkit";

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

export default store;
