"use client";

import { FormEvent, useState } from "react";
import { FaEye } from "react-icons/fa6";
import { FaEyeLowVision } from "react-icons/fa6";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend-only and no actual login functionality
    console.log("Logging in with:", { email, password });
  };

  return (
    <div>
      <div className="screenMiddleDiv">
        <div className="formDiv">
          <form onSubmit={handleSubmit}>
            <h2 className="text-center">Login</h2>

            <div>
              <label htmlFor="email" className="formLabel">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="button" onClick={() => setShowPassword(showPassword ? false : true)} className="eyeButton">
                {showPassword ? <FaEyeLowVision /> : <FaEye />}
              </button>
            </div>      
          </div>

            <button type="submit" className="formButton">
              Login
            </button>

            <div className="text-center mt-4">
              <a href="#" className="text-sm hover:underline">
                Forgot your password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
