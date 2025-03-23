import { Field } from "formik";
import { CiMap } from "react-icons/ci";
import { useId } from "react";

import css from "./Location.module.css";

const Location = () => {
  const locationId = useId();

  return (
    <div className={css.locationContainer}>
      <label className={css.labelLocation} htmlFor={locationId}>
        Location
      </label>
      <CiMap className={css.icon} />
      <Field
        className={css.inputLocation}
        type="text"
        placeholder="City"
        name="location"
        id={locationId}
      />
    </div>
  );
};

export default Location;
