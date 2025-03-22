import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { selectError, selectItems } from "../../redux/trucks/selectors";

import CatalogTruckCard from "../../components/CatalogTruckCard/CatalogTruckCard";

import css from "./CatalogList.module.css";

const CatalogList = () => {
  const trucks = useSelector(selectItems);
  const error = useSelector(selectError);

  if (error) {
    toast.error("An error occurred while fetching trucks.", {
      position: "top-right",
    });
  }

  return (
    <>
      <ul className={css.catalogList}>
        {trucks.map((truck) => (
          <li className={css.catalogListItem} key={truck.id}>
            <CatalogTruckCard truck={truck} />
          </li>
        ))}
      </ul>

      {error && <Toaster />}
    </>
  );
};

export default CatalogList;
