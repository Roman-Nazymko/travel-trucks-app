import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast, Toaster } from "react-hot-toast";

import Calendar from "../Calendar/Calendar";

import css from "./BookingForm.module.css";

const BookingForm = () => {
  const initialValues = {
    username: "",
    email: "",
    bookingDates: [null, null],
    comment: "",
  };

  const handleSubmit = async (values, actions) => {
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          access_key: "53170ba9-276a-4d7f-8149-285cd09f2e87",
        }),
      });

      const result = await response.json();

      if (result.success) {
        toast.success(
          "Success! Your submission was received. We will get back to you soon"
        );
        actions.resetForm();
      } else {
        toast.error("Submission failed. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string()
      .email("Must be a valid email!")
      .required("Required")
      .matches(
        /^(?!.*\.ru$)(?=.*@)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Must be a valid email!"
      ),
    bookingDates: Yup.array()
      .of(Yup.date().required("Required"))
      .min(2, "Please select a start and end date"),
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={css.form} autoComplete="off">
          <h2 className={css.formTitle}>Book your campervan now</h2>
          <p className={css.subTitle}>
            Stay connected! We are always ready to help you.
          </p>
          <div className={css.errorContainer}>
            <ErrorMessage
              className={css.error}
              name="username"
              component="span"
            />
            <Field
              className={css.inputText}
              type="text"
              name="username"
              placeholder="Name*"
            />
          </div>
          <div className={css.errorContainer}>
            <ErrorMessage className={css.error} name="email" component="span" />
            <Field
              className={css.inputText}
              type="text"
              name="email"
              placeholder="Email*"
            />
          </div>

          <div className={css.errorContainer}>
            <ErrorMessage
              className={css.error}
              name="bookingDate"
              component="span"
            />
            <Calendar name="bookingDates" />
          </div>

          <Field
            className={css.inputComent}
            as="textarea"
            name="comment"
            placeholder="Comment"
          />
          <button className={css.button} type="submit">
            Send
          </button>
        </Form>
      </Formik>
      <Toaster position="top-right" />
    </>
  );
};

export default BookingForm;
