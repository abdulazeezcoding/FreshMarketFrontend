import { Formik } from "formik";
import React, { useEffect } from "react";
import * as Yup from "yup";
import "../App.css";
import { useNavigate } from "react-router-dom";

const schema = Yup.object({
  email: Yup.string().required("Email is a required field"),

  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});

export default function UserLogin() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      navigate("/dashboard");
    }
  }, []);
  const handleSubmit = async (e) => {
    const response = await fetch(`${process.env.REACT_APP_FRESH_MARKET_API}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(e),
    });
    const data = await response.json();
    console.log(data);
    if (data && data.token) {
      // console.log('checking:', data.token)
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    }
  };

  return (
    <>
      {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
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
              <form onSubmit={handleSubmit}>
                <span>Login</span>
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter email id / username"
                  className="form-control inp_text"
                  id="email"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.email && touched.email && errors.email}
                </p>
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties...*/}
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
                {/* Click on submit button to submit the form */}
                <button type="submit">Login</button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  );
}
