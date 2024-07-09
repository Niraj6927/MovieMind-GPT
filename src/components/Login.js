import React, { useState } from "react";
import Header from "./Header";
import { login_bgimage_page } from "../constant/Constant";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={login_bgimage_page} alt="login-bgimg" />
      </div>
      <form className="absolute w-3/12 text-white p-12 bg-black mt-32 mx-auto right-0 left-0 rounded-xl bg-opacity-80">
        <h1 className="text-3xl font-bold py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {isSignInForm ? (
          ""
        ) : (
          <input
            type="text"
            placeholder="Enter Your Fullname"
            autoComplete="off"
            className="p-3 my-4 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 my-4 w-full bg-gray-700 rounded-lg "
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-4 w-full bg-gray-700 rounded-lg "
        />
        <button className="p-3 font-bold my-6 bg-red-800 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {isSignInForm ? (
          <p className="py-4">
            New to Netflix?{" "}
            <span
              onClick={toggleSignInForm}
              className="font-bold cursor-pointer"
            >
              Sign up now.
            </span>{" "}
          </p>
        ) : (
          <p className="py-4">
            You have already Sign Up?{" "}
            <span
              onClick={toggleSignInForm}
              className="font-bold cursor-pointer"
            >
              Sign In Now.
            </span>{" "}
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
