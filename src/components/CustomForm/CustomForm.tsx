import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

export const CustomForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        message: "",
        email: "",
        toggle: false,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 15 characters or less")
          .required("Required"),
        message: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ values }) => (
        <Form>
          <label htmlFor="firstName">First name</label>
          <Field
            name="firstName"
            type="text"
            className="form-input"
            placeholder="Jane"
          />
          <ErrorMessage name="firstName" />

          <label htmlFor="message">message</label>
          <Field name="message" as="textarea" />
          <ErrorMessage name="message" />

          <label htmlFor="email">Email Address</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />

          <label htmlFor="colors">Select color</label>
          <Field name="colors" as="select">
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </Field>

          <label>
            <Field type="checkbox" name="toggle" />
            {`${values.toggle}`}
          </label>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};
