import { createSelector } from "@reduxjs/toolkit";

export const selectItems = (state) => state.allTrucks.items;
export const selectError = (state) => state.allTrucks.error;
export const selectLoading = (state) => state.allTrucks.loading;
