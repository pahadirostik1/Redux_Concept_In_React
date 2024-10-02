// store.js
import { configureStore } from "@reduxjs/toolkit"; // Use @reduxjs/toolkit's configureStore
import reducers from "./reducers"; // Import the combined reducers
import {thunk} from "redux-thunk"; // Import thunk properly 

export const store = configureStore({
  reducer: reducers, // Pass reducers as an object
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), // Add thunk middleware
});
