import { useSelector } from "react-redux";
import { selectTruckItems } from "../../redux/truck/selectors";

import BookingForm from "../BookingForm/BookingForm";
import CategoryDetails from "../CategoryDetails/CategoryDetails";
import VehicleDetails from "../VehicleDetails/VehicleDetails";

import css from "./Features.module.css";

const Features = () => {
  const truckInfo = useSelector(selectTruckItems);

  return (
    <div className={css.featuresContainer}>
      <div className={css.featuresInfo}>
        <CategoryDetails truckInfo={truckInfo} />
        <div className={css.characteristics}>
          <h2 className={css.subTitle}>Vehicle details</h2>
          <VehicleDetails truckInfo={truckInfo} />
        </div>
      </div>
      <BookingForm />
    </div>
  );
};

export default Features;
