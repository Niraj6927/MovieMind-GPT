import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { GPT_BG_URL } from "../constant/Constant";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={GPT_BG_URL} alt="gptBgImage" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
