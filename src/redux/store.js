import { configureStore } from "@reduxjs/toolkit";

import allTrucksReducer from "./trucks/slice.js";

export const store = configureStore({
  reducer: {
    allTrucks: allTrucksReducer,
  },
});
