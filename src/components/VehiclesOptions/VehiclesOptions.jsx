import { Field } from "formik";
import { BsGrid, BsGrid1X2, BsGrid3X3Gap } from "react-icons/bs";
import css from "./VehiclesOptions.module.css";

const VehiclesOptions = ({ formTypes }) => {
  const iconMap = {
    panelTruck: <BsGrid1X2 className={css.radioIcon} />,
    fullyIntegrated: <BsGrid className={css.radioIcon} />,
    alcove: <BsGrid3X3Gap className={css.radioIcon} />,
  };

  const formTypeLabels = {
    panelTruck: "Van",
    fullyIntegrated: "Fully Integrated",
    alcove: "Alcove",
  };

  return (
    <>
      <h2 className={css.radioTitle}>Vehicle type</h2>
      <ul className={css.radioContainers}>
        {formTypes.map((type) => (
          <li key={type} className={css.customRadioWrapper}>
            <Field
              className={css.radioInput}
              type="radio"
              name="form"
              id={`radio-${type}`}
              value={type}
            />
            <label
              htmlFor={`radio-${type}`}
              className={css.customRadioContainer}
            >
              <div className={css.customRadio}>{iconMap[type] || null} </div>
              <span className={css.radioText}>
                {formTypeLabels[type] || type}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </>
  );
};

export default VehiclesOptions;
