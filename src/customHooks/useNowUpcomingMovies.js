import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../constant/Constant";

const useNowUpcomingMovies = () => {
  // Fetch data from TMDB API and update Store
  const dispatch = useDispatch();

  // Minimize the API calls
  const nowUpcomingMovies = useSelector(
    (store) => store.movies.nowUpcomingMovies
  );

  const getNowUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );

    const json = await data.json();
    //console.log(json.results);
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    !nowUpcomingMovies && getNowUpcomingMovies();
  }, []);
};

export default useNowUpcomingMovies;
