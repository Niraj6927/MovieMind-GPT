import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../constant/Constant";

const useNowTopRatedMovies = () => {
  // Fetch data from TMDB API and update Store
  const dispatch = useDispatch();

  const getNowTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json.results);
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getNowTopRatedMovies();
  }, []);
};

export default useNowTopRatedMovies;
