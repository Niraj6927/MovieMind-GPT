import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPopularMovies from "../customHooks/useNowPopularMovies";
import useNowTopRatedMovies from "../customHooks/useNowTopRatedMovies";
import useNowUpcomingMovies from "../customHooks/useNowUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  useNowPopularMovies();
  useNowTopRatedMovies();
  useNowUpcomingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
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
