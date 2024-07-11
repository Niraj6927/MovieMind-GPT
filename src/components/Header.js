import React from "react";
import { netflix_logo } from "../constant/Constant";
import { FaSignOutAlt } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <div className="flex">
        <img className="w-48" src={netflix_logo} alt="logo" />
        {user && (
          <ul className="flex text-white mt-7">
            <li className="px-2 text-white">Home</li>
            <li className="px-2 text-gray-300 hover:text-white">TV Shows</li>
            <li className="px-2 text-gray-300 hover:text-white">Movies</li>
            <li className="px-2 text-gray-300 hover:text-white">
              News & Popular
            </li>
            <li className="px-2 text-gray-300 hover:text-white">My List</li>
            <li className="px-2 text-gray-300 hover:text-white">
              Browser My Languages
            </li>
          </ul>
        )}
      </div>
      {user && (
        <div className="flex">
          <img
            className="w-10 h-10 p-1 mt-5 rounded-lg"
            src={user?.photoURL}
            alt="usericon"
          />
          <button
            className="text-white text-4xl font-bold"
            onClick={handleSignOut}
          >
            <FaSignOutAlt />
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
