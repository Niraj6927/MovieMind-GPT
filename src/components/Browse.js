import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPopularMovies from "../customHooks/useNowPopularMovies";
import useNowTopRatedMovies from "../customHooks/useNowTopRatedMovies";
import useNowUpcomingMovies from "../customHooks/useNowUpcomingMovies";
import GptSearch from "../GPT/GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useNowPlayingMovies();
  useNowPopularMovies();
  useNowTopRatedMovies();
  useNowUpcomingMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

      {/* 
        MainContainer
          - VideoBackground
          - VideoTitle
        SecondaryContainer
          - MovieList * n
            - Cards * n
      */}
    </div>
  );
};

export default Browse;
