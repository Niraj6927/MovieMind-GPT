import React from "react";
import useMovieVideosTrailer from "../customHooks/useMovieVideosTrailer";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  const trailerId = useSelector((store) => store.movies?.trailerVideo);
  // custome hook useMovieVideos
  useMovieVideosTrailer(movieId);

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerId?.key}?&autoplay=1&mute=1`}
        title="YouTube video player"
        autoPlay
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
