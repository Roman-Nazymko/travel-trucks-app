import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    filtersValue: {
      location: "",
      transmission: "",
      engine: "",
      form: "",
      AC: false,
      kitchen: false,
      TV: false,
      bathroom: false,
    },
  },
  reducers: {
    addFilters(state, action) {
      Object.keys(action.payload).forEach((key) => {
        state.filtersValue[key] = action.payload[key];
      });
    },
    resetFilters(state) {
      state.filtersValue = {
        location: "",
        transmission: "",
        engine: "",
        form: "",
        AC: false,
        kitchen: false,
        TV: false,
        bathroom: false,
      };
    },
  },
});

export const { addFilters, resetFilters } = filterSlice.actions;

const filterReducer = filterSlice.reducer;
export default filterReducer;
