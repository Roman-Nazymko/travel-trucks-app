import { configureStore } from "@reduxjs/toolkit";

import allTrucksReducer from "./trucks/slice.js";
import paginationReducer from "./pagination/slice";

export const store = configureStore({
  reducer: {
    allTrucks: allTrucksReducer,
    pagination: paginationReducer,
  },
});
