import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllTrucks } from "../../redux/trucks/operations";
import { resetFilters } from "../../redux/filters/slice";

import Filters from "../../components/Filters/Filters";
import CatalogList from "../../components/CatalogList/CatalogList";

import css from "./CatalogPage.module.css";

export default function CatalogPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllTrucks());
    dispatch(resetFilters());
  }, [dispatch]);

  return (
    <section className={css.catalog}>
      <div className={css.container}>
        <div className={css.filterContainer}>
          <Filters />
        </div>
        <div>
          <CatalogList />
        </div>
      </div>
    </section>
  );
}
