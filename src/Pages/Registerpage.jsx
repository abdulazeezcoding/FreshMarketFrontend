import { Formik } from "formik";
import React, { useEffect } from "react";
import * as Yup from "yup";
import "../App.css";
import { useNavigate } from "react-router-dom";

const schema = Yup.object().shape({
  firstName: Yup.string().required("firstName is a required field"),
  lastName: Yup.string().required("lastName is a required field"),
  email: Yup.string().required("Email is a required field"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});

export default function Registerpage() {
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    console.log(values);
    const response = await fetch("http://localhost:4000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await response.json();
    console.log(data);

    navigate("/register");
  };
  return (
    <>
      {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
      <Formik
        validationSchema={schema}
        initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <div className="login">
            <div className="form">
              {/* Passing handleSubmit parameter tohtml form onSubmit property */}
              <form noValidate onSubmit={handleSubmit}>
                <span>Register Here</span>
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="firstName"
                  name="firstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  placeholder="Enter firsname id / username"
                  className="form-control inp_text"
                  id="firstName"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.firstName && touched.firstName && errors.firstName}
                </p>
                <input
                  type="lastName"
                  name="lastName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  placeholder="Enter lastname"
                  className="form-control inp_text"
                  id="lastName"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.lastName && touched.lastName && errors.lastName}
                </p>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter email"
                  className="form-control inp_text"
                  id="email"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>

                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                  className="form-control"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
                <input
                  type="confrim password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="confirm  password"
                  className="form-control"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
                {/* Click on submit button to submit the form */}
                <button type="submit">Register</button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}
