import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../constant/Constant";
import { useEffect } from "react";
import { addMoviesTrailer } from "../utils/moviesSlice";

const useMovieVideosTrailer = (movieId) => {
  // fetch trailer video && updating the store with trailer video
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/786892/videos?language=en-US",
      API_OPTIONS
    );

    const json = await data.json();
    //console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    // console.log(trailer);
    dispatch(addMoviesTrailer(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieVideosTrailer;
