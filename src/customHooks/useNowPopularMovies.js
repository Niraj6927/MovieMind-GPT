import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../constant/Constant";
import { useEffect } from "react";

const useNowPopularMovies = () => {
  // Fetch data from TMDB API and update Store
  const dispatch = useDispatch();

  const nowPopularMovies = useSelector(
    (store) => store.movies.nowPopularMovies
  );

  const getNowPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    //console.log(json.results);
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !nowPopularMovies && getNowPopularMovies();
  }, []);
};

export default useNowPopularMovies;
