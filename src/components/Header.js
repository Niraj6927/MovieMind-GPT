import React from "react";
import { netflix_logo } from "../constant/Constant";

const Header = () => {
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-48" src={netflix_logo} alt="logo" />
    </div>
  );
};

export default Header;
