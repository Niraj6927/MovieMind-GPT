import React from "react";
import { MOVIE_CARD_IMG_URL } from "../constant/Constant";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-52 pr-4">
      <img
        // onClick={handleShowMovieInfo}
        className="rounded-md hover:scale-125 transition duration-500 cursor-pointer object-cover"
        src={MOVIE_CARD_IMG_URL + posterPath}
        alt="movieCardimg"
      />
    </div>
  );
};

export default MovieCard;
