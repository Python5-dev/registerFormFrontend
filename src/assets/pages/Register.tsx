"use client";

import { useState } from 'react';
import { FaEye } from "react-icons/fa6";
import { FaEyeLowVision } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Register(){
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInput = (e:any):void => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({
      ...user,
      [name]: value
    })
  }

  const handleSubmit = (e:any):void => {
    e.preventDefault();
    // Frontend-only and no actual register functionality
    console.log("Registering in with:", user);
  };

  return (
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
              required
            />
          </div>

          <div className='my-6'>
            <label htmlFor="email" className="formLabel">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleInput}
              required
            />
          </div>

          <div className="my-6">
            <label htmlFor="password" className="formLabel">
              Password
            </label>
            <div className='relative flex items-center'>
              <input
                type={showPassword ? "text": "password"}
                name="password"
                value={user.password}
                onChange={handleInput}
                required
              />
              <button type="button" onClick={() => setShowPassword(showPassword ? false : true)} className="eyeButton">
                {showPassword ? <FaEyeLowVision /> : <FaEye />}
              </button>
            </div>      
          </div>

          <div className="my-6">
            <label htmlFor="confirmPassword" className="formLabel">
              Confirm Password
            </label>
            <div className='relative flex items-center'>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={user.confirmPassword}
                onChange={handleInput}
                required
              />
              <button type="button" onClick={() => setShowConfirmPassword(showConfirmPassword ? false : true)} className="eyeButton">
              {showConfirmPassword ? <FaEyeLowVision /> : <FaEye />}
              </button>
            </div>
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
  );
};

export default Register;
