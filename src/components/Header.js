import React, { useEffect } from "react";
import { netflix_logo, SUPPORTED_LANGUAGES } from "../constant/Constant";
import { FaSignOutAlt } from "react-icons/fa";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/languageSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // User is signed In
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/Browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    // Toggle my Gpt Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    //console.log(e.target.value)
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <div className="flex">
        <img className="w-48 mx-auto md:mx-0" src={netflix_logo} alt="logo" />
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
        <div className="flex ">
          {showGptSearch && (
            <select
              className="my-6 m-2 px-4 rounded-md text-gray bg-gray-50"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="my-4 px-4 bg-purple-800 text-white rounded-md"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "HOME" : "GPT Search"}
          </button>

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
