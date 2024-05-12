// store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../screens/Authentication/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["user/setUser"], // Ignore serialization check for specific actions
        ignoredPaths: ["user.userData"], // Ignore serialization check for specific paths in the state
      },
    }),
});
