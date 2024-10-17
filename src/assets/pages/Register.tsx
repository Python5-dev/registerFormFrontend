"use client";

import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import registerSchema from "../schemas";

const Register = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  }
  const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: initialValues,
    validationSchema: registerSchema,
    onSubmit: (values) => {
      console.log("Registering in with:", values);
    }
  })

  return (
    <>
      <div className="screenMiddleDiv">
        <div className="formDiv">
          <form onSubmit={handleSubmit}>
            <h2 className="text-center">Register</h2>
            <div>
              <label htmlFor="username" className="formLabel">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              { errors.username && touched.username ? <p className="formError">{errors.username}</p> : null }
            </div>

            <div className='my-6'>
              <label htmlFor="email" className="formLabel">
                Email Address
              </label>
              <input
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              { errors.email && touched.email ? <p className="formError">{errors.email}</p> : null }
            </div>

            <div className="my-6">
              <label htmlFor="password" className="formLabel">
                Password
              </label>
                <input
                  type="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                { errors.password && touched.password ? <p className="formError">{errors.password}</p> : null }
            </div>

            <div className="my-6">
              <label htmlFor="confirmPassword" className="formLabel">
                Confirm Password
              </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                { errors.confirmPassword && touched.confirmPassword ? <p className="formError">{errors.confirmPassword}</p> : null }
            </div>

            <button type="submit" className="formButton">
              Register
            </button>
            <div className='text-center mt-3'>
              Already have an account? <Link to="/login" className='text-sm hover:underline'>Login</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
