import { createSlice } from "@reduxjs/toolkit";
import { fetchTruck } from "./operation";

const detailTruckSlice = createSlice({
  name: "truck",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },

  extraReducers: (builder) =>
    builder
      .addCase(fetchTruck.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchTruck.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTruck.rejected, (state) => {
        state.loading = false;
        state.error = true;
      }),
});

const truckReducer = detailTruckSlice.reducer;
export default truckReducer;
