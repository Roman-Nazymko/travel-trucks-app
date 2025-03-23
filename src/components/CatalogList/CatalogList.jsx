import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import clsx from "clsx";
import {
  selectError,
  selectLoading,
  selectVisibleTrucks,
} from "../../redux/trucks/selectors";
import { activateLoader } from "../../redux/trucks/slice";
import { selectPaginationPage } from "../../redux/pagination/selectors";
import { addValue } from "../../redux/pagination/slice";

import CatalogTruckCard from "../../components/CatalogTruckCard/CatalogTruckCard";

import badFilterImg from "../../assets/img/bad-filter.png";

import css from "./CatalogList.module.css";

const CatalogList = () => {
  const trucks = useSelector(selectVisibleTrucks);
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

      {error && <Toaster />}

      {trucks.length === 0 && !loading && !error ? (
        <div className={css.badFilter}>
          <img
            className={css.badFilterImg}
            src={badFilterImg}
            alt="No results"
          />
        </div>
      ) : (
        visibleCount < trucks.length && (
          <button
            onClick={loadMore}
            className={clsx(
              visibleCount >= trucks.length ? css.disLoadMore : css.loadMore
            )}
            disabled={loading}
          >
            Load more
          </button>
        )
      )}
    </>
  );
};

export default CatalogList;
