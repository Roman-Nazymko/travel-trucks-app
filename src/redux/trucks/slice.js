import { createSlice } from "@reduxjs/toolkit";
import { fetchAllTrucks } from "./operations";

const trucksSlice = createSlice({
  name: "trucks",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  reducers: {
    activateLoader(state, action) {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchAllTrucks.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchAllTrucks.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchAllTrucks.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

export const { activateLoader } = trucksSlice.actions;

const allTrucksReducer = trucksSlice.reducer;

export default allTrucksReducer;
