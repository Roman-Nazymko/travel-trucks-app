import { configureStore } from "@reduxjs/toolkit";

import allTrucksReducer from "./trucks/slice.js";
import filterReducer from "./filters/slice";
import paginationReducer from "./pagination/slice";

export const store = configureStore({
  reducer: {
    allTrucks: allTrucksReducer,
    filter: filterReducer,
    pagination: paginationReducer,
  },
});
