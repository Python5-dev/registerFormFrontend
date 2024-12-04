import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { registerSchema } from "../schemas";
import axios from 'axios';
import { message } from 'antd';

const Register = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "", 
  }

  const {values, errors, touched, handleChange, handleSubmit, handleBlur} = useFormik({
    initialValues: initialValues,
    validationSchema: registerSchema,
    onSubmit: async (values, action) => {
      try {
        const res = await axios.post("http://127.0.0.1:8000/register/", values)
        if (res.status === 201) {
          messageApi.open({
            type: "success",
            content: res.data.message
          })
        }
      } catch (error:any) {
        messageApi.open({
          type: "error",
          content: error.response.data.error
        })
      }
      action.resetForm()
    }
  });

  return (
    <>
      {contextHolder}
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
              {errors.username && touched.username ? <span className="formError">{errors.username}</span> : null}
            </div>

            <div className='my-6'>
              <label htmlFor="email" className="formLabel">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? <span className="formError">{errors.email}</span> : null}
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
              {errors.password && touched.password ? <span className="formError">{errors.password}</span> : null}
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
              {errors.confirmPassword && touched.confirmPassword ? <span className="formError">{errors.confirmPassword}</span> : null}
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
