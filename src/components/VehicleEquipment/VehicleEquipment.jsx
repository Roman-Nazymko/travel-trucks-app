import { Field } from "formik";
import {
  BsCupHot,
  BsDisplay,
  BsDroplet,
  BsDiagram3,
  BsWind,
} from "react-icons/bs";

import css from "./VehicleEquipment.module.css";

const equipmentOptions = [
  { key: "AC", icon: <BsWind className={css.checkboxIcon} /> },
  {
    key: "transmission",
    label: "Automatic",
    icon: <BsDiagram3 className={css.checkboxIcon} />,
  },
  { key: "kitchen", icon: <BsCupHot className={css.checkboxIcon} /> },
  { key: "TV", icon: <BsDisplay className={css.checkboxIcon} /> },
  { key: "bathroom", icon: <BsDroplet className={css.checkboxIcon} /> },
];

const VehicleEquipment = () => {
  return (
    <>
      <p className={css.filterText}>Filters</p>
      <div className={css.equipmentContainer}>
        <h2 className={css.equipmentTitle}>Vehicle equipment</h2>
        <ul className={css.checkboxContainers}>
          {equipmentOptions.map((item) => (
            <li key={item.key} className={css.customCheckboxWrapper}>
              <Field
                className={css.checkboxInput}
                type="checkbox"
                name={item.key}
                id={item.key}
              />
              <label htmlFor={item.key} className={css.customCheckboxContainer}>
                <div className={css.customCheckbox}>
                  {item.icon}
                  <span className={css.checkboxText}>
                    {item.label ? item.label : item.key}
                  </span>
                </div>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default VehicleEquipment;
