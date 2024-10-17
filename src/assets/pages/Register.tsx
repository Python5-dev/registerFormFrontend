"use client";

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { message } from 'antd';
import { validateEmail, validatePassword } from "../validate";

const Register = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({
    email: "",
    Password: "",
  });

  const handleInput = (e:any) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({
      ...user,
      [name]: value
    })
  }

  const handleError = () => {
    if(!(user.username && user.email && user.password && user.confirmPassword)) {
      messageApi.open({
        type: "error",
        content: "All fields are requierd",
      })
    }
    if(!validateEmail(user.email) && user.email != "") {
      setError({
        ...error,
        email: "Email is not valid",
      })
    }
    if(!validatePassword(user.password) && user.password != "") {
      setError({
        ...error,
        Password: "Password should be contain letter, number and special character"
      })
    }
    if (user.confirmPassword != "" && user.password !== user.confirmPassword) {
      messageApi.open({
        type: "error",
        content: "Password and Confirm Password are not equal",
      })
    }
  }

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    handleError();
    console.log("Registering in with:", user);
  };

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
                value={user.username}
                onChange={handleInput}
              />
            </div>

            <div className='my-6'>
              <label htmlFor="email" className="formLabel">
                Email Address
              </label>
              <input
                type="text"
                name="email"
                value={user.email}
                onChange={handleInput}
              />
              <p className='text-xs text-red-600 ml-2'>{error.email}</p>
            </div>

            <div className="my-6">
              <label htmlFor="password" className="formLabel">
                Password
              </label>
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleInput}
                />
                <p className='text-xs text-red-600 ml-2'>{error.Password}</p>
            </div>

            <div className="my-6">
              <label htmlFor="confirmPassword" className="formLabel">
                Confirm Password
              </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={user.confirmPassword}
                  onChange={handleInput}
                />
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
