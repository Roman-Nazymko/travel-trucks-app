import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import clsx from "clsx";
import {
  selectError,
  selectLoading,
  selectItems,
} from "../../redux/trucks/selectors";
import { activateLoader } from "../../redux/trucks/slice";
import { selectPaginationPage } from "../../redux/pagination/selectors";
import { addValue } from "../../redux/pagination/slice";

import CatalogTruckCard from "../../components/CatalogTruckCard/CatalogTruckCard";

import css from "./CatalogList.module.css";

const CatalogList = () => {
  const trucks = useSelector(selectItems);
  const visibleCount = useSelector(selectPaginationPage);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  const loadMore = () => {
    dispatch(activateLoader(true));
    setTimeout(() => {
      dispatch(addValue(4));
      dispatch(activateLoader(false));
    }, 500);
  };

  if (error) {
    toast.error("An error occurred while fetching trucks.", {
      position: "top-right",
    });
  }

  return (
    <>
      <ul className={css.catalogList}>
        {trucks.slice(0, visibleCount).map((truck) => (
          <li className={css.catalogListItem} key={truck.id}>
            <CatalogTruckCard truck={truck} />
          </li>
        ))}
      </ul>
      {visibleCount < trucks.length && (
        <button
          onClick={loadMore}
          className={clsx(
            visibleCount >= trucks.length ? css.disLoadMore : css.loadMore
          )}
          disabled={loading}
        >
          Load more
        </button>
      )}

      {error && <Toaster />}
    </>
  );
};

export default CatalogList;
