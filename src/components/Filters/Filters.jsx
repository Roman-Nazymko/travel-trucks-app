import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { selectItems } from "../../redux/trucks/selectors";
import { addFilters } from "../../redux/filters/slice";
import { changeValue } from "../../redux/pagination/slice";
import { activateLoader } from "../../redux/trucks/slice";

import Location from "../Location/Location";
import VehicleEquipment from "../VehicleEquipment/VehicleEquipment";
import VehiclesOptions from "../VehiclesOptions/VehiclesOptions";

import css from "./Filters.module.css";

const getUniqueValues = (items, key) => [
  ...new Set(items.map((item) => item[key])),
];

const Filters = () => {
  const items = useSelector(selectItems);

  const formTypes = getUniqueValues(items, "form").sort((a, b) => {
    const order = ["panelTruck", "fullyIntegrated", "alcove"];
    return order.indexOf(a) - order.indexOf(b);
  });

  const initialValues = {
    location: "",
    transmission: "",
    form: "",
    AC: false,
    kitchen: false,
    TV: false,
    bathroom: false,
  };

  const dispatch = useDispatch();
  const handleFilterSubmit = (values, actions) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    dispatch(activateLoader(true));
    setTimeout(() => {
      dispatch(addFilters(values));
      dispatch(changeValue(4));
      actions.resetForm();
      dispatch(activateLoader(false));
    }, 500);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleFilterSubmit}>
      <Form>
        <Location />
        <VehicleEquipment />
        {formTypes.length > 0 && <VehiclesOptions formTypes={formTypes} />}
        <button className={css.buttonFilters} type="submit">
          Search
        </button>
      </Form>
    </Formik>
  );
};

export default Filters;
