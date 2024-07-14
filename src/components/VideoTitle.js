import React from "react";
import { FaPlay } from "react-icons/fa";
import { ImInfo } from "react-icons/im";

const VideoTitle = ({ title, description }) => {
  return (
    <div className="w-screen aspect-video pt-56 px-12 absolute bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold text-white">{title}</h1>
      <p className="w-1/3 my-6 text-white">{description}</p>
      <div>
        <button className="p-2 px-8 font-bold bg-white rounded-md border border-gray-600 hover:bg-opacity-70">
          <span className="flex">
            <FaPlay className="text-xl mt-[2px]" />{" "}
            <span className="pl-2"> Play</span>
          </span>
        </button>
        <button className="p-2 px-6 mx-2 font-bold text-white bg-gray-700 border border-gray-600 rounded-md hover:bg-opacity-70">
          {" "}
          <span className="flex">
            <ImInfo className="text-xl mt-[2px]" />{" "}
            <span className="pl-2"> More Info</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
