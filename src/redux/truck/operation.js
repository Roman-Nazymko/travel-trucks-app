import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTruck = createAsyncThunk(
  "fetchTruck",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.get(`/campers/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
