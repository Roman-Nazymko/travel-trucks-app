import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import enGB from "date-fns/locale/en-GB";
import { useField, useFormikContext } from "formik";

import css from "./Calendar.module.css";

registerLocale("en-GB", enGB);

const Calendar = ({ name }) => {
  const [, meta] = useField(name);
  const { setFieldValue, values } = useFormikContext();
  const error = meta.touched && meta.error;
  const [startDate, endDate] = values[name] || [null, null];

  return (
    <div>
      <DatePicker
        className={css.reactDatepicker}
        placeholderText="Booking date*"
        selectsRange
        startDate={startDate}
        endDate={endDate}
        minDate={new Date()}
        locale="en-GB"
        dateFormat="d MMMM, yyyy"
        onChange={(dates) => {
          setFieldValue(name, dates);
        }}
      />
      {error && (
        <div className={css.error}>
          {Array.isArray(meta.error)
            ? meta.error.find((msg) => msg !== "Required") || "Required"
            : meta.error}
        </div>
      )}
    </div>
  );
};

export default Calendar;
