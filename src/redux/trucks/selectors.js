import { createSelector } from "@reduxjs/toolkit";
import { selectFilters } from "../filters/selectors";

export const selectItems = (state) => state.allTrucks.items;
export const selectError = (state) => state.allTrucks.error;
export const selectLoading = (state) => state.allTrucks.loading;

export const selectVisibleTrucks = createSelector(
  [selectItems, selectFilters],
  (trucks, filterName) => {
    return trucks.filter((truck) => {
      const filterLocation = filterName.location
        ? filterName.location.trim().toLowerCase()
        : "";
      const truckLocation = truck.location.toLowerCase();
      return (
        (!filterLocation ||
          filterLocation === "" ||
          truckLocation.includes(filterLocation)) &&
        (!filterName.transmission || truck.transmission === "automatic") &&
        (!filterName.form || truck.form === filterName.form) &&
        (!filterName.AC || truck.AC === filterName.AC) &&
        (!filterName.kitchen || truck.kitchen === filterName.kitchen) &&
        (!filterName.TV || truck.TV === filterName.TV) &&
        (!filterName.bathroom || truck.bathroom === filterName.bathroom)
      );
    });
  }
);
