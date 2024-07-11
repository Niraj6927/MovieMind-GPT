import React, { useRef, useState } from "react";
import Header from "./Header";
import { login_bgimage_page, user_avatar } from "../constant/Constant";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch()

  const navigate = useNavigate();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // Validate the form Data
    const message = checkValidData(email.current.value, password.current.value);
    console.log(message);
    setErrorMessage(message);

    if (message) return;

    // Sign In/ Sign Up Logic
    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: user_avatar,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse")
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse")
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={login_bgimage_page} alt="login-bgimg" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 text-white p-12 bg-black mt-32 mx-auto right-0 left-0 rounded-xl bg-opacity-80"
      >
        <h1 className="text-3xl font-bold py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {isSignInForm ? (
          ""
        ) : (
          <input
            ref={name}
            type="text"
            placeholder="Enter Your Fullname"
            autoComplete="off"
            className="p-3 my-4 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-3 my-4 w-full bg-gray-700 rounded-lg "
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 my-4 w-full bg-gray-700 rounded-lg "
        />
        <p className="text-red-700 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-3 font-bold my-6 bg-red-800 w-full rounded-lg"
          onClick={handleButtonClick}
        >
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
