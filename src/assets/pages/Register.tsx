import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { registerSchema } from "../schemas";
import axios from 'axios';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    onSubmit: async (values, action) => {
      try{
        const res = await axios.post("http://127.0.0.1:8000/register", values);
        console.log(res);
        if(res.status === 201) {
          toast.success("Registration Successfull");
        }
      } catch (error) {
        toast.error("Registration Failed")
      }
      action.resetForm();
    },
  });

  return (
    <>
      <div className="screenMiddleDiv">
        <div className="formDiv">
          <form onSubmit={handleSubmit} method='POST'>
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
        <ToastContainer position='top-right' theme='colored' transition={Slide}/>
      </div>
    </>
  );
};

export default Register;
