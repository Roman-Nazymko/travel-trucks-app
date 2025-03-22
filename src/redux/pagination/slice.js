import { createSlice } from "@reduxjs/toolkit";

const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    value: 4,
  },
  reducers: {
    changeValue(state, action) {
      state.value = action.payload;
    },
    addValue(state, action) {
      state.value += action.payload;
    },
  },
});

export const { changeValue, addValue } = paginationSlice.actions;

const paginationReducer = paginationSlice.reducer;

export default paginationReducer;
